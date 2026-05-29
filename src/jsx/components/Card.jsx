import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import * as CalcEngine from '../../utils/calculationEngine';

function Card(props){
    const { pageType, cardIndex } = props;
    const { updateCard } = useContext(AppContext);
    const [cardData, setCardData] = useState(props || {});
    const [result, setResult] = useState(props?.result || null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedData = {
            ...cardData,
            [name]: value === '' ? '' : (name === 'card_name' ? value : parseFloat(value))
        };
        setCardData(updatedData);
        
        // Auto-save to cache
        if (cardIndex !== undefined && pageType) {
            updateCard(pageType, cardIndex, updatedData);
        }
    };

    const calculateResult = () => {
        setError(null);
        setResult(null);

        try {
            let calculatedResult;

            if (pageType === 'RoI') {
                // Formula: result = U₀ × r^n
                const { depart, ratio, iterations } = cardData;
                if (!depart || depart === '' || ratio === '' || iterations === '' || iterations === undefined) {
                    setError('Veuillez remplir tous les champs');
                    return;
                }
                calculatedResult = CalcEngine.calculateROI(depart, ratio, iterations);
            } 
            else if (pageType === 'iterations') {
                // Formula: n = log(result/U₀) / log(r)
                const { depart, ratio, finalResult } = cardData;
                if (!depart || depart === '' || ratio === '' || !finalResult || finalResult === '') {
                    setError('Veuillez remplir tous les champs');
                    return;
                }
                calculatedResult = CalcEngine.calculateIterations(depart, ratio, finalResult);
            } 
            else if (pageType === 'ratio') {
                // Formula: r = (result/U₀)^(1/n)
                const { depart, iterations, finalResult } = cardData;
                if (!depart || depart === '' || !iterations || iterations === '' || !finalResult || finalResult === '') {
                    setError('Veuillez remplir tous les champs');
                    return;
                }
                calculatedResult = CalcEngine.calculateGrowthRate(depart, iterations, finalResult);
            } 
            else if (pageType === 'depart') {
                // Formula: U₀ = result / r^n
                const { ratio, iterations, finalResult } = cardData;
                if (ratio === '' || !iterations || iterations === '' || !finalResult || finalResult === '') {
                    setError('Veuillez remplir tous les champs');
                    return;
                }
                calculatedResult = CalcEngine.calculateInitialAmount(ratio, iterations, finalResult);
            }

            if (isNaN(calculatedResult) || !isFinite(calculatedResult)) {
                setError('Résultat invalide - vérifiez vos paramètres');
                return;
            }

            // Update card data with result and save to cache
            const updatedCardData = {
                ...cardData,
                result: calculatedResult,
                timestamp: new Date().toLocaleString()
            };
            
            setCardData(updatedCardData);
            setResult(calculatedResult);
            
            // Save to global state and cache
            updateCard(pageType, cardIndex, updatedCardData);
        } catch (err) {
            setError(err.message || 'Erreur lors du calcul');
        }
    };

    const renderInputs = () => {
        switch(pageType) {
            case 'RoI':
                return (
                    <>
                        <div>
                            <label>Somme de départ (U₀)</label>
                            <input 
                                className='w3-input card-input' 
                                name='depart' 
                                type='number' 
                                min='0' 
                                step='0.01'
                                value={cardData.depart || ''}
                                onChange={handleInputChange}
                                placeholder="Ex: 1000"
                            />
                        </div>
                        <br/>
                        <div>
                            <label>Taux de croissance (r) en %</label>
                            <input 
                                className='w3-input card-input' 
                                name='ratio' 
                                type='number' 
                                min='0' 
                                step='0.01'
                                value={cardData.ratio !== undefined && cardData.ratio !== '' ? cardData.ratio : ''}
                                onChange={handleInputChange}
                                placeholder="Ex: 5"
                            />
                        </div>
                        <br/>
                        <div>
                            <label>Nombre d'itérations (n)</label>
                            <input 
                                className='w3-input card-input' 
                                name='iterations' 
                                type='number' 
                                min='0' 
                                step='1'
                                value={cardData.iterations !== undefined && cardData.iterations !== '' ? cardData.iterations : ''}
                                onChange={handleInputChange}
                                placeholder="Ex: 3"
                            />
                        </div>
                    </>
                );
            case 'iterations':
                return (
                    <>
                        <div>
                            <label>Somme de départ (U₀)</label>
                            <input 
                                className='w3-input card-input' 
                                name='depart' 
                                type='number' 
                                min='0' 
                                step='0.01'
                                value={cardData.depart || ''}
                                onChange={handleInputChange}
                                placeholder="Ex: 1000"
                            />
                        </div>
                        <br/>
                        <div>
                            <label>Taux de croissance (r) en %</label>
                            <input 
                                className='w3-input card-input' 
                                name='ratio' 
                                type='number' 
                                min='0' 
                                step='0.01'
                                value={cardData.ratio !== undefined && cardData.ratio !== '' ? cardData.ratio : ''}
                                onChange={handleInputChange}
                                placeholder="Ex: 5"
                            />
                        </div>
                        <br/>
                        <div>
                            <label>Résultat désiré (objectif ROI)</label>
                            <input 
                                className='w3-input card-input' 
                                name='finalResult' 
                                type='number' 
                                min='0' 
                                step='0.01'
                                value={cardData.finalResult || ''}
                                onChange={handleInputChange}
                                placeholder="Ex: 1157.63"
                            />
                        </div>
                    </>
                );
            case 'ratio':
                return (
                    <>
                        <div>
                            <label>Somme de départ (U₀)</label>
                            <input 
                                className='w3-input card-input' 
                                name='depart' 
                                type='number' 
                                min='0' 
                                step='0.01'
                                value={cardData.depart || ''}
                                onChange={handleInputChange}
                                placeholder="Ex: 1000"
                            />
                        </div>
                        <br/>
                        <div>
                            <label>Nombre d'itérations (n)</label>
                            <input 
                                className='w3-input card-input' 
                                name='iterations' 
                                type='number' 
                                min='0' 
                                step='1'
                                value={cardData.iterations !== undefined && cardData.iterations !== '' ? cardData.iterations : ''}
                                onChange={handleInputChange}
                                placeholder="Ex: 3"
                            />
                        </div>
                        <br/>
                        <div>
                            <label>Résultat désiré (objectif ROI)</label>
                            <input 
                                className='w3-input card-input' 
                                name='finalResult' 
                                type='number' 
                                min='0' 
                                step='0.01'
                                value={cardData.finalResult || ''}
                                onChange={handleInputChange}
                                placeholder="Ex: 1157.63"
                            />
                        </div>
                    </>
                );
            case 'depart':
                return (
                    <>
                        <div>
                            <label>Taux de croissance (r) en %</label>
                            <input 
                                className='w3-input card-input' 
                                name='ratio' 
                                type='number' 
                                min='0' 
                                step='0.01'
                                value={cardData.ratio !== undefined && cardData.ratio !== '' ? cardData.ratio : ''}
                                onChange={handleInputChange}
                                placeholder="Ex: 5"
                            />
                        </div>
                        <br/>
                        <div>
                            <label>Nombre d'itérations (n)</label>
                            <input 
                                className='w3-input card-input' 
                                name='iterations' 
                                type='number' 
                                min='0' 
                                step='1'
                                value={cardData.iterations !== undefined && cardData.iterations !== '' ? cardData.iterations : ''}
                                onChange={handleInputChange}
                                placeholder="Ex: 3"
                            />
                        </div>
                        <br/>
                        <div>
                            <label>Résultat désiré (objectif ROI)</label>
                            <input 
                                className='w3-input card-input' 
                                name='finalResult' 
                                type='number' 
                                min='0' 
                                step='0.01'
                                value={cardData.finalResult || ''}
                                onChange={handleInputChange}
                                placeholder="Ex: 1157.63"
                            />
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return(
        <div className="w3-container generic-card">
            <div className="w3-card-4">
                <header className="w3-container w3-light-grey">
                    <input 
                        className='w3-input card-input' 
                        name='card_name' 
                        type='text' 
                        placeholder="Nom du scénario"
                        value={cardData.card_name || ''}
                        onChange={handleInputChange}
                    />
                </header>
                <div className="w3-container">
                    <br/>
                    {renderInputs()}
                    <br/>
                    {error && (
                        <div style={{ 
                            backgroundColor: '#ffebee', 
                            color: '#c62828', 
                            padding: '10px', 
                            borderRadius: '4px',
                            marginBottom: '10px'
                        }}>
                            {error}
                        </div>
                    )}
                    {result !== null && (
                        <div style={{ 
                            backgroundColor: '#e8f5e9', 
                            color: '#2e7d32', 
                            padding: '10px', 
                            borderRadius: '4px',
                            marginBottom: '10px'
                        }}>
                            <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>
                                {pageType === 'RoI' && `Résultat final: ${result.toFixed(2)} €`}
                                {pageType === 'iterations' && `Nombre d'itérations: ${Math.ceil(result)} (${result.toFixed(2)})`}
                                {pageType === 'ratio' && `Taux de croissance: ${result.toFixed(2)}%`}
                                {pageType === 'depart' && `Somme de départ: ${result.toFixed(2)} €`}
                            </div>
                            {cardData.timestamp && (
                                <div style={{ fontSize: '12px', opacity: 0.8 }}>
                                    Calculé le: {cardData.timestamp}
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <button 
                    className="w3-button w3-block w3-dark-grey w3-medium simulate-button"
                    onClick={calculateResult}
                >
                    Lancer la simulation
                </button>
            </div>
        </div>
    )
}

export default Card;
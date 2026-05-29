import React from 'react'
import AddCardButton from '../components/buttons/AddCardButton';
import empty from '../../assets/pictures/empty_safe.png';
import {useContext} from 'react'
import {AppContext} from '../App'
import { ChartIllustration, CalculatorIllustration, GrowthIllustration, DocumentIllustration } from '../components/Illustrations'

function Home(){
    const {
        global_state,
        } = useContext(AppContext)
    return (
        <div>
            {
            (global_state.RoI.length === 0    || global_state.iterations.length === 0 || 
             global_state.depart.length === 0 || global_state.ratio.length === 0   )  &&
            <div id = "empty-safe">
                <img id = "empty-safe-icon" src={empty} alt="empty page"/>
                <h4 id ="no-content">Aucun contenu pour le moment...</h4>
            </div>
            }
            <div className="info-section home-info-container">
                <h2>À Propos d'Odapi</h2>
                <p><strong>Odapi</strong> (Outil D'Aide Pour Investissements) est une application pour calculer et analyser vos scénarios d'investissement.</p>
                
                <div style={{ textAlign: 'center', margin: '30px 0' }}>
                    <GrowthIllustration size={100} />
                </div>
                
                <h3>Comment ça marche ?</h3>
                <p>Odapi utilise des <strong>suites géométriques</strong> pour projeter la croissance de vos investissements. Le principe est simple :</p>
                
                <div className="formula-box">
                    <h4>📊 Formule de base : <code>U₀ × r<sup>n</sup></code></h4>
                    <ul>
                        <li><strong>U₀</strong> = Somme de départ (montant initial)</li>
                        <li><strong>r</strong> = Raison (taux de croissance)</li>
                        <li><strong>n</strong> = Nombre d'itérations (périodes)</li>
                    </ul>
                </div>
                
                <h3>Important : Conversion du taux</h3>
                <p>Le taux de croissance (raison) est exprimé en <strong>pourcentage</strong> dans l'application, mais il est automatiquement converti pour les calculs :</p>
                <div className="formula-box highlight">
                    r = (pourcentage ÷ 100) + 1
                </div>
                <p><strong>Exemple :</strong> Si vous entrez 5% de croissance, cela devient r = (5 ÷ 100) + 1 = 1.05</p>
                
                <h3>📈 Les Catégories d'Investissement</h3>
                <p>Chaque catégorie vous permet de résoudre l'équation <strong>U₀ × r<sup>n</sup> = Résultat final</strong> en trouvant l'une des variables manquantes :</p>
                
                <div className="categories-grid">
                    <div className="category-card">
                        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                            <ChartIllustration size={60} />
                        </div>
                        <h4>📊 Retour sur Investissement (ROI)</h4>
                        <p><strong>Trouve :</strong> Le résultat final</p>
                        <p><strong>Donnez :</strong> U₀, r, et n</p>
                        <p>Calculer le montant final après un nombre d'itérations donné avec une croissance spécifique.</p>
                    </div>
                    <div className="category-card">
                        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                            <CalculatorIllustration size={60} />
                        </div>
                        <h4>🔄 Itérations</h4>
                        <p><strong>Trouve :</strong> Le nombre de périodes (n)</p>
                        <p><strong>Donnez :</strong> U₀, r, et le résultat désiré</p>
                        <p>Déterminer combien d'itérations sont nécessaires pour atteindre un ROI cible avec un montant et un taux donnés.</p>
                    </div>
                    <div className="category-card">
                        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                            <DocumentIllustration size={60} />
                        </div>
                        <h4>⚙️ Taux par itération</h4>
                        <p><strong>Trouve :</strong> Le taux de croissance (r)</p>
                        <p><strong>Donnez :</strong> U₀, n, et le résultat désiré</p>
                        <p>Calculer quel taux de croissance est nécessaire pour atteindre un ROI cible en un nombre d'itérations donné.</p>
                    </div>
                    <div className="category-card">
                        <h4>💰 Somme de départ</h4>
                        <p><strong>Trouve :</strong> Le montant initial (U₀)</p>
                        <p><strong>Donnez :</strong> r, n, et le résultat désiré</p>
                        <p>Déterminer le montant initial à investir pour atteindre un objectif de ROI avec un taux et un nombre d'itérations spécifiques.</p>
                    </div>
                </div>
                
                <h3>🎯 Cas d'usage</h3>
                <p>Par exemple, si vous investissez <strong>1000 €</strong> avec une croissance de <strong>5%</strong> par an pendant <strong>3 ans</strong> :</p>
                <div className="formula-box highlight">
                    Résultat = 1000 × (1.05)³ = 1000 × 1.157625 = <strong>1157.63 €</strong>
                </div>
                
                <h3>💡 Comment utiliser</h3>
                <p>Le processus est simple : selon votre besoin, sélectionnez la catégorie appropriée et fournissez les paramètres connus :</p>
                
                <ol>
                    <li>Cliquez sur le <strong>bouton "+"</strong> en bas à droite</li>
                    <li>Sélectionnez la catégorie selon ce que vous cherchez à trouver</li>
                    <li>Remplissez les paramètres connus (voir tableau ci-dessous)</li>
                    <li>Cliquez sur <strong>"Lancer la simulation"</strong></li>
                    <li>Consultez le résultat calculé dans la section correspondante</li>
                </ol>
                
                <div className="formula-box">
                    <h4>📋 Guide rapide des paramètres :</h4>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <tbody>
                            <tr style={{ backgroundColor: '#f0f0f0' }}>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Catégorie</strong></td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Paramètres à donner</strong></td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}><strong>Résultat obtenu</strong></td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>ROI</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>U₀, r, n</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Résultat final</td>
                            </tr>
                            <tr style={{ backgroundColor: '#f9f9f9' }}>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Itérations</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>U₀, r, objectif ROI</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>n (nombre d'itérations)</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Taux par itération</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>U₀, n, objectif ROI</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>r (taux de croissance)</td>
                            </tr>
                            <tr style={{ backgroundColor: '#f9f9f9' }}>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Somme de départ</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>r, n, objectif ROI</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px' }}>U₀ (montant initial)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
                    💾 <strong>Note :</strong> Tous vos scénarios d'investissement sont automatiquement sauvegardés dans le navigateur. Vous pouvez revenir à vos données à tout moment !
                </p>
            </div>
            
            <AddCardButton page ='home'/>
        </div>)
}

export default Home;
// Variables globales para controlar el estado del juego
let currentScenarioIndex = 0;
let currentSituationIndex = 0;
let equityIndex = 50;
let socialReputation = 50;
let currentExplanation = "";
let currentImpacts = { equity: 0, reputation: 0 };

// Referencias a los elementos del DOM
const gameScreen = document.getElementById('game-screen');
const explanationScreen = document.getElementById('explanation-screen');
const resultScreen = document.getElementById('result-screen');

// Elementos de la pantalla principal
const scenarioBadge = document.getElementById('scenario-badge');
const situationBadge = document.getElementById('situation-badge');
const scenarioTitle = document.getElementById('scenario-title');
const scenarioDescription = document.getElementById('scenario-description');
const situationDescription = document.getElementById('situation-description');
const decisionsContainer = document.getElementById('decisions-container');
const equityValue = document.getElementById('equity-value');
const reputationValue = document.getElementById('reputation-value');
const equityProgress = document.getElementById('equity-progress');
const reputationProgress = document.getElementById('reputation-progress');

// Elementos de la pantalla de explicación
const explanationText = document.getElementById('explanation-text');
const equityImpact = document.getElementById('equity-impact');
const reputationImpact = document.getElementById('reputation-impact');
const continueButton = document.getElementById('continue-button');

// Elementos de la pantalla de resultado
const resultBadge = document.getElementById('result-badge');
const resultDescription = document.getElementById('result-description');
const finalEquityValue = document.getElementById('final-equity-value');
const finalReputationValue = document.getElementById('final-reputation-value');
const finalEquityProgress = document.getElementById('final-equity-progress');
const finalReputationProgress = document.getElementById('final-reputation-progress');
const playAgainButton = document.getElementById('play-again-button');

// Inicializar el juego cuando la página carga
document.addEventListener('DOMContentLoaded', initGame);

// Función para inicializar el juego
function initGame() {
    updateGameUI();
    
    // Configurar eventos
    continueButton.addEventListener('click', continueAfterExplanation);
    playAgainButton.addEventListener('click', resetGame);
}

// Función para actualizar la interfaz del juego
function updateGameUI() {
    const currentScenario = scenarios[currentScenarioIndex];
    const currentSituation = currentScenario.situations[currentSituationIndex];
    
    // Actualizar información del escenario
    scenarioBadge.textContent = `Escenario ${currentScenarioIndex + 1}/${scenarios.length}`;
    situationBadge.textContent = `Situación ${currentSituationIndex + 1}/${currentScenario.situations.length}`;
    scenarioTitle.textContent = currentScenario.name;
    scenarioDescription.textContent = currentScenario.description;
    situationDescription.textContent = currentSituation.description;
    
    // Actualizar indicadores
    equityValue.textContent = `${equityIndex}%`;
    reputationValue.textContent = `${socialReputation}%`;
    equityProgress.style.width = `${equityIndex}%`;
    reputationProgress.style.width = `${socialReputation}%`;
    
    // Generar botones de decisión
    decisionsContainer.innerHTML = '';
    currentSituation.decisions.forEach((decision, index) => {
        const button = document.createElement('button');
        button.className = 'decision-button';
        button.innerHTML = `
            <span class="decision-text">${decision.text}</span>
            <span class="decision-icon">↓</span>
        `;
        button.addEventListener('click', () => handleDecision(decision));
        decisionsContainer.appendChild(button);
    });
}

// Función para manejar la decisión del jugador
function handleDecision(decision) {
    // Guardar la explicación y los impactos
    currentExplanation = decision.explanation;
    currentImpacts = {
        equity: decision.equityImpact,
        reputation: decision.reputationImpact
    };
    
    // Actualizar la pantalla de explicación
    explanationText.textContent = currentExplanation;
    
    // Mostrar los impactos con colores según sean positivos o negativos
    equityImpact.textContent = currentImpacts.equity > 0 ? `+${currentImpacts.equity}` : currentImpacts.equity;
    equityImpact.className = `impact-value ${currentImpacts.equity > 0 ? 'positive' : currentImpacts.equity < 0 ? 'negative' : 'neutral'}`;
    
    reputationImpact.textContent = currentImpacts.reputation > 0 ? `+${currentImpacts.reputation}` : currentImpacts.reputation;
    reputationImpact.className = `impact-value ${currentImpacts.reputation > 0 ? 'positive' : currentImpacts.reputation < 0 ? 'negative' : 'neutral'}`;
    
    // Mostrar la pantalla de explicación
    gameScreen.classList.add('hidden');
    explanationScreen.classList.remove('hidden');
}

// Función para continuar después de la explicación
function continueAfterExplanation() {
    // Actualizar puntuaciones
    equityIndex = Math.max(0, Math.min(100, equityIndex + currentImpacts.equity));
    socialReputation = Math.max(0, Math.min(100, socialReputation + currentImpacts.reputation));
    
    // Avanzar a la siguiente situación o escenario
    if (currentSituationIndex < scenarios[currentScenarioIndex].situations.length - 1) {
        // Avanzar a la siguiente situación
        currentSituationIndex++;
    } else {
        // Avanzar al siguiente escenario
        if (currentScenarioIndex < scenarios.length - 1) {
            currentScenarioIndex++;
            currentSituationIndex = 0;
        } else {
            // Juego completado
            showResult();
            return;
        }
    }
    
    // Actualizar la interfaz y volver a la pantalla principal
    updateGameUI();
    explanationScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
}

// Función para mostrar el resultado final
function showResult() {
    let result = "";
    let description = "";
    
    // Determinar el resultado basado en las puntuaciones
    if (equityIndex >= 75 && socialReputation >= 75) {
        result = "Líder Empático";
        description = "Has demostrado un fuerte compromiso con la equidad y has ganado el respeto de quienes te rodean. Tu liderazgo inspira a otros a seguir tu ejemplo.";
    } else if (equityIndex >= 75 && socialReputation < 75) {
        result = "Justiciero Ético";
        description = "Defiendes firmemente tus principios de equidad, aunque a veces tus métodos pueden ser controvertidos o generar resistencia en los demás.";
    } else if (equityIndex < 75 && socialReputation >= 75) {
        result = "Observador Neutral";
        description = "Eres bien visto por los demás, pero no siempre tomas una posición firme en favor de la equidad cuando se necesita.";
    } else {
        result = "Injusto por Omisión";
        description = "Tus acciones y omisiones han contribuido a perpetuar la desigualdad, y los demás han notado tu falta de compromiso con la justicia.";
    }
    
    // Actualizar la pantalla de resultado
    resultBadge.textContent = result;
    resultDescription.textContent = description;
    
    finalEquityValue.textContent = `${equityIndex}%`;
    finalReputationValue.textContent = `${socialReputation}%`;
    finalEquityProgress.style.width = `${equityIndex}%`;
    finalReputationProgress.style.width = `${socialReputation}%`;
    
    // Mostrar la pantalla de resultado
    explanationScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
}

// Función para reiniciar el juego
function resetGame() {
    // Reiniciar variables
    currentScenarioIndex = 0;
    currentSituationIndex = 0;
    equityIndex = 50;
    socialReputation = 50;
    
    // Actualizar la interfaz
    updateGameUI();
    
    // Volver a la pantalla principal
    resultScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
}
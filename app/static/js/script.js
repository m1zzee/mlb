// static/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    // Список всех аудио на странице
    const allAudios = document.querySelectorAll('audio');

    // Функция для паузы всех аудио кроме текущего
    function pauseOthers(currentAudio) {
        allAudios.forEach(audio => {
            if (audio !== currentAudio && !audio.paused) {
                audio.pause();
                audio.currentTime = 0; // Сброс на начало (опционально)
            }
        });
    }

    // Для аудио физических свойств
    const propertiesAudio = document.getElementById('properties-audio');
    const playPauseProperties = document.getElementById('play-pause-properties');
    if (playPauseProperties && propertiesAudio) {
        playPauseProperties.addEventListener('click', () => {
            if (propertiesAudio.paused) {
                pauseOthers(propertiesAudio);
                propertiesAudio.play();
                playPauseProperties.textContent = 'Пауза';
            } else {
                propertiesAudio.pause();
                playPauseProperties.textContent = 'Воспроизвести';
            }
        });

        // Сброс кнопки при окончании аудио
        propertiesAudio.addEventListener('ended', () => {
            playPauseProperties.textContent = 'Воспроизвести';
        });
    }

    // Для аудио кристаллической решётки
    const metalAudio = document.getElementById('metal-audio');
    const playPauseMetal = document.getElementById('play-pause-metal');
    if (playPauseMetal && metalAudio) {
        playPauseMetal.addEventListener('click', () => {
            if (metalAudio.paused) {
                pauseOthers(metalAudio);
                metalAudio.play();
                playPauseMetal.textContent = 'Пауза';
            } else {
                metalAudio.pause();
                playPauseMetal.textContent = 'Воспроизвести';
            }
        });

        // Сброс кнопки при окончании аудио
        metalAudio.addEventListener('ended', () => {
            playPauseMetal.textContent = 'Воспроизвести';
        });
    }

// Для аудио ряда активности
const activityAudio = document.getElementById('activity-audio');
const playPauseActivity = document.getElementById('play-pause-activity');
if (playPauseActivity && activityAudio) {
    playPauseActivity.addEventListener('click', () => {
        if (activityAudio.paused) {
            pauseOthers(activityAudio);
            activityAudio.play();
            playPauseActivity.textContent = 'Пауза';
        } else {
            activityAudio.pause();
            playPauseActivity.textContent = 'Воспроизвести';
        }
    });
    activityAudio.addEventListener('ended', () => {
        playPauseActivity.textContent = 'Воспроизвести';
    });
}

// Для аудио реакции с водой
const waterAudio = document.getElementById('water-audio');
const playPauseWater = document.getElementById('play-pause-water');
if (playPauseWater && waterAudio) {
    playPauseWater.addEventListener('click', () => {
        if (waterAudio.paused) {
            pauseOthers(waterAudio);
            waterAudio.play();
            playPauseWater.textContent = 'Пауза';
        } else {
            waterAudio.pause();
            playPauseWater.textContent = 'Воспроизвести';
        }
    });
    waterAudio.addEventListener('ended', () => {
        playPauseWater.textContent = 'Воспроизвести';
    });
}


// === Сплавы ===
const classificationAudio = document.getElementById('classification-audio');
const playPauseClassification = document.getElementById('play-pause-classification');
if (playPauseClassification && classificationAudio) {
    playPauseClassification.addEventListener('click', () => {
        if (classificationAudio.paused) {
            pauseOthers(classificationAudio);
            classificationAudio.play();
            playPauseClassification.textContent = 'Пауза';
        } else {
            classificationAudio.pause();
            playPauseClassification.textContent = 'Воспроизвести';
        }
    });
    classificationAudio.addEventListener('ended', () => playPauseClassification.textContent = 'Воспроизвести');
}

const alloyPropsAudio = document.getElementById('properties-audio');
const playPauseAlloyProps = document.getElementById('play-pause-properties');
if (playPauseAlloyProps && alloyPropsAudio) {
    playPauseAlloyProps.addEventListener('click', () => {
        if (alloyPropsAudio.paused) {
            pauseOthers(alloyPropsAudio);
            alloyPropsAudio.play();
            playPauseAlloyProps.textContent = 'Пауза';
        } else {
            alloyPropsAudio.pause();
            playPauseAlloyProps.textContent = 'Воспроизвести';
        }
    });
    alloyPropsAudio.addEventListener('ended', () => playPauseAlloyProps.textContent = 'Воспроизвести');
}


// === Тест ===
const quizForm = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-quiz');
const resultsDiv = document.getElementById('quiz-results');
const scoreP = document.getElementById('score');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');

if (submitButton) {
    submitButton.addEventListener('click', () => {
        let score = 0;
        let total = 10;
        let explanations = '';

        // Q1
        const q1 = document.querySelector('input[name="q1"]:checked');
        if (q1 && q1.value === 'b') {
            score++;
            explanations += '<p class="text-success">Q1: Верно!</p>';
            if (correctSound) correctSound.play();
        } else {
            explanations += '<p class="text-danger">Q1: Неверно. Правильный: высокая электропроводность.</p>';
            if (wrongSound) wrongSound.play();
        }

        // Q2
        const q2 = document.querySelector('input[name="q2"]:checked');
        if (q2 && q2.value === 'false') {
            score++;
            explanations += '<p class="text-success">Q2: Верно!</p>';
        } else {
            explanations += '<p class="text-danger">Q2: Неверно. Металлы слева в ПС.</p>';
        }

        // Q3
        const q3a = document.getElementById('q3a').checked;
        const q3b = document.getElementById('q3b').checked;
        const q3c = document.getElementById('q3c').checked;
        if (q3a && !q3b && q3c) {
            score++;
            explanations += '<p class="text-success">Q3: Верно!</p>';
        } else {
            explanations += '<p class="text-danger">Q3: Неверно. K, Na и Ca (активные).</p>';
        }

        // Q4 (новый radio)
        const q4 = document.querySelector('input[name="q4"]:checked');
        if (q4 && q4.value === 'b') {
            score++;
            explanations += '<p class="text-success">Q4: Верно!</p>';
        } else {
            explanations += '<p class="text-danger">Q4: Неверно. 2Mg + O₂ → 2MgO.</p>';
        }

        // Q5
        const q5 = document.querySelector('input[name="q5"]:checked');
        if (q5 && q5.value === 'b') {
            score++;
            explanations += '<p class="text-success">Q5: Верно!</p>';
        } else {
            explanations += '<p class="text-danger">Q5: Неверно. Сталь: Fe + 0,02–2% C.</p>';
        }

        // Q6
        const q6 = document.querySelector('input[name="q6"]:checked');
        if (q6 && q6.value === 'false') {
            score++;
            explanations += '<p class="text-success">Q6: Верно!</p>';
        } else {
            explanations += '<p class="text-danger">Q6: Неверно. Сплавы не имеют постоянного состава.</p>';
        }

        // Q7
        const q7a = document.getElementById('q7a').checked;
        const q7b = document.getElementById('q7b').checked;
        const q7c = document.getElementById('q7c').checked;
        if (q7a && !q7b && q7c) {
            score++;
            explanations += '<p class="text-success">Q7: Верно!</p>';
        } else {
            explanations += '<p class="text-danger">Q7: Неверно. Слева от H: Zn, Fe, Al, Mg и др.</p>';
        }

        // Q8
        const q8 = document.querySelector('input[name="q8"]:checked');
        if (q8 && q8.value === 'b') {
            score++;
            explanations += '<p class="text-success">Q8: Верно!</p>';
        } else {
            explanations += '<p class="text-danger">Q8: Неверно. Hg (ртуть).</p>';
        }

        // Q9 (новый checkbox)
        const q9a = document.getElementById('q9a').checked;
        const q9b = document.getElementById('q9b').checked;
        const q9c = document.getElementById('q9c').checked;
        if (q9a && !q9b && q9c) {
            score++;
            explanations += '<p class="text-success">Q9: Верно!</p>';
        } else {
            explanations += '<p class="text-danger">Q9: Неверно. Прочность и устойчивость к коррозии.</p>';
        }

        // Q10
        const q10 = document.querySelector('input[name="q10"]:checked');
        if (q10 && q10.value === 'b') {
            score++;
            explanations += '<p class="text-success">Q10: Верно!</p>';
        } else {
            explanations += '<p class="text-danger">Q10: Неверно. Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag (вытеснение).</p>';
        }

        scoreP.innerHTML = `Ваш результат: ${score} из ${total} (${(score / total * 100).toFixed(0)}%)`;
        resultsDiv.innerHTML += explanations;
        resultsDiv.style.display = 'block';
    });
}




    // Ролловеры для карточек (с главной страницы, если нужно)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => card.style.backgroundColor = '#f0f0f0');
        card.addEventListener('mouseout', () => card.style.backgroundColor = 'white');
    });
});




// ===== IMAGE ZOOM =====
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".zoomable").forEach(img => {
        img.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.className = "image-overlay";

            const fullImg = document.createElement("img");
            fullImg.src = img.src;
            fullImg.alt = img.alt;

            overlay.appendChild(fullImg);
            document.body.appendChild(overlay);

            // Закрытие по клику
            overlay.addEventListener("click", () => {
                overlay.remove();
            });

            // Закрытие по Esc
            document.addEventListener("keydown", function escHandler(e) {
                if (e.key === "Escape") {
                    overlay.remove();
                    document.removeEventListener("keydown", escHandler);
                }
            });
        });
    });
});
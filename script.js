particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,  // Количество частиц
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ff6b6b"  // Оранжевый цвет
        },
        "shape": {
            "type": "circle",  // Форма частиц
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,  // Дистанция для связи частиц
            "color": "#ff6b6b",  // Цвет линии (оранжевый)
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});


function copyToClipboard() {
    const text = document.querySelector('.install-command').textContent;
    navigator.clipboard.writeText(text).then(function() {
        alert("Текст скопирован в буфер обмена!");
    }, function(err) {
        console.error('Ошибка копирования: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    hljs.highlightAll();
});

document.addEventListener('DOMContentLoaded', function () {
    const codeElement = document.getElementById('python-code');
    const codeText = codeElement.textContent;

    // Простая подсветка Python кода
    const highlightedCode = highlightPythonCode(codeText);
    codeElement.innerHTML = highlightedCode;
});

// Функция для подсветки Python кода
function highlightPythonCode(code) {
    const keywords = ['def', 'class', 'import', 'from', 'return', 'if', 'else', 'elif', 'for', 'while', 'try', 'except', 'with', 'as', 'raise', 'True', 'False', 'None'];
    const numbers = /\b\d+(\.\d+)?\b/g;
    const strings = /"([^"]*)"|'([^']*)'/g;
    const comments = /#.*$/gm;

    // Заменяем ключевые слова
    code = code.replace(new RegExp(`\\b(${keywords.join('|')})\\b`, 'g'), '<span class="keyword">$1</span>');

    // Заменяем строки
    code = code.replace(strings, '<span class="string">$&</span>');

    // Заменяем комментарии
    code = code.replace(comments, '<span class="comment">$&</span>');

    // Заменяем числа
    code = code.replace(numbers, '<span class="number">$&</span>');

    return code;
}


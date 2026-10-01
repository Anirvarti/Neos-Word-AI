(() => {
  const style = document.createElement('style');
  style.textContent = '.round-score{display:flex;align-items:center;gap:10px;margin-top:14px;padding:12px 14px;border:1px solid #cfd3ff;border-radius:13px;background:#fafaff;color:#3730a3}.round-score b{font-size:1.35rem}.round-score span{color:#667085;font-size:.9rem}.round-hint{color:#667085}';
  document.head.append(style);
  const input = document.getElementById('challengeInput');
  const reveal = document.getElementById('reveal');
  const guess = document.getElementById('guess');
  const check = document.getElementById('checkGuess');
  const result = document.getElementById('challengeResult');
  if (!input || !reveal || !guess || !check || !result) return;

  const rounds = ['I believe that', 'I want to learn', 'I love', 'Science helps us', 'Curiosity helps us'];
  let streak = 0;
  let round = 0;
  const tools = reveal.parentElement;
  const next = document.createElement('button');
  next.className = 'btn';
  next.type = 'button';
  next.textContent = '↻ New round';
  tools.append(next);

  const score = document.createElement('div');
  score.className = 'round-score';
  score.innerHTML = '🔥 Streak: <b>0</b><span>Match the AI\'s top guess to keep it alive.</span>';
  result.parentElement.insertBefore(score, result);

  const updateScore = () => {
    score.querySelector('b').textContent = streak;
  };
  const startRound = () => {
    round = (round + 1) % rounds.length;
    input.value = rounds[round];
    guess.value = '';
    result.innerHTML = '<span class="round-hint">Make your prediction, then reveal the AI.</span>';
  };

  next.addEventListener('click', startRound);
  check.addEventListener('click', () => {
    const prediction = predict(input.value);
    if (!prediction) return;
    const top = Object.entries(prediction.c).sort((a, b) => b[1] - a[1])[0][0];
    if (guess.value.trim().toLowerCase() === top) {
      streak += 1;
    } else {
      streak = 0;
    }
    updateScore();
  });
})();

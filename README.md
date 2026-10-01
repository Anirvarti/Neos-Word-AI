# Neos Word AI — Class 7

A browser-only AI learning demonstration for a parent presentation.

## Features
- Next-word prediction using a local bigram/trigram n-gram model.
- Visible probability calculations and explanation of why a prediction was made.
- Interactive prediction challenge.
- Teach-AI mode that adds examples to the current browser session.
- Local controlled quote generator with themes.
- Explore section explaining tokenization, pattern counting, probability, prediction, and creation.

## Files
- `index.html` — page structure and UI.
- `style.css` — complete visual design.
- `app.js` — all application logic, model, prediction, challenge, teaching, and quote generation.
- `data/training-sentences.txt` — human-readable starter training examples.

## Run on macOS
### Simplest
Double-click `index.html` and open it in Safari or Chrome.

### Recommended local server
Open Terminal, then:

```bash
cd /path/to/wordwise-ai
python3 -m http.server 8000
```

Open:

`http://localhost:8000`

Stop the server with `Ctrl+C`.

## Important technical note
The Word Predictor is a small local n-gram model, not GPT. It counts observed word transitions and estimates next-word probabilities from those counts. The quote creator is a controlled local rule-and-pattern generator. No API key, backend, or internet connection is required.

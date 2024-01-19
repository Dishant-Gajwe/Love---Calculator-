    let name1 = document.getElementById('name1');
    let name2 = document.getElementById('name2');
    let score = document.getElementById('score');
    const jsConfetti = new JSConfetti();

    function init() {
      if (!name1.value || !name2.value) {
        alert('Please enter names.');
        return;
      }

      let result = calculateLoveBetween(name1.value, name2.value);
      score.innerHTML = result + "%";

      // Add confetti only if there is a result
      jsConfetti.addConfetti({
        emojis: ['❤️'],
        emojiSize: 40,
        confettiNumber: 150,
      });
    }

    function calculateLoveBetween(name1, name2) {
      let combineNames = name1 + name2;
      let uniqNames = [...new Set(combineNames.toLowerCase())];
      let total = 0;

      for (var char of uniqNames) {
        total += char.charCodeAt();
      }

      let loverPercentage = (total % 100) + 1;
      return loverPercentage;
    }

    function reset() {
      name1.value = '';
      name2.value = '';
      score.innerHTML = '';
    }
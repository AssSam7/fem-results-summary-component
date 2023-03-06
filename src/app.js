/* DOM Elements */
const summaryList = document.querySelector(".card_summary__list");
const resultEl = document.querySelector("#total_result");

function getSummaryItem(item) {
  return `
        <div class="summary_item" style="background: ${item.bgColor}">
            <img
              src=${item.icon}
              alt="Item Icon"
              class="icon"
            />
            <h3 class="category" style="color: ${item.color}">${item.category}</h3>
            <div class="score_wrapper">
              <h3 class="score">${item.score}</h3>
              <h3 class="divider">/</h3>
              <h3 class="out_of">100</h3>
            </div>
        </div>
  `;
}

/* Fetching the JSON data and rendering */
fetch("./data.json")
  .then((response) => response.json())
  .then((summaryData) => {
    console.log(summaryData);
    summaryData.forEach((item) => {
      summaryList.insertAdjacentHTML("beforeend", getSummaryItem(item));
    });

    let totalScore = summaryData.reduce((acc, curr) => acc + curr.score, 0);
    totalScore = Math.round(totalScore / 4);
    console.log(totalScore);
    resultEl.textContent = totalScore;
  });

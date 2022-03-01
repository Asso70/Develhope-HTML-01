const selCatTag = document.querySelector("select#cat-tag-select");
const divBody = document.querySelector("body");
async function fetchCatTags(intervals) {
  const response = await fetch("https://cataas.com/api/tags");
  const tags = await response.json();
  console.log(tags);
  intervals.forEach(function(element) {
    const validTags = tags.slice(element.firstEle - 1, element.lastEle - 1);
    validTags.forEach(function(ele) {
      const sloTag = document.createElement("option");
      sloTag.setAttribute("value", ele);
      sloTag.innerHTML = ele;
      selCatTag.append(sloTag);
    });
  });
}
fetchCatTags([{firstEle: 5, lastEle: 10}, {firstEle: 15, lastEle: 20}]);
selCatTag.addEventListener("change", async function(event) {
  const response = await fetch(`https://cataas.com/cat/${event.target.value}?json=true`);
  const catData = await response.json();
  const divImg = document.createElement("div");
  const imgCat = document.createElement("img");
  imgCat.setAttribute("src", `https://cataas.com${catData.url}`);
  divBody.append(divImg);
  divImg.append(imgCat);
});

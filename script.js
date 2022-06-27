const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const workHours = document.getElementById("workHours");
const prevWorkHours = document.getElementById("prevWorkHours");
const studyHours = document.getElementById("studyHours");
const prevStudyHours = document.getElementById("prevStudyHours");
const playHours = document.getElementById("playHours");
const prevPlayHours = document.getElementById("prevPlayHours");
const exerciseHours = document.getElementById("exerciseHours");
const prevExerciseHours = document.getElementById("prevExerciseHours");
const socialHours = document.getElementById("socialHours");
const prevSocialHours = document.getElementById("prevSocialHours");
const selfCareHours = document.getElementById("selfCareHours");
const prevSelfCareHours = document.getElementById("prevSelfCareHours");

function addHours(numHours) {
  if (numHours > 1) {
    return numHours + "hrs";
  } else {
    return numHours + "hr";
  }
}

async function loadJSON() {
  const response = await fetch("data.json");
  const data = await response.json();
  daily.addEventListener("click", () => {
    daily.classList.add("selected");
    weekly.classList.remove("selected");
    monthly.classList.remove("selected");
    workHours.innerHTML = addHours(data[0].timeframes.daily.current);
    prevWorkHours.innerHTML =
      "Yesterday - " + addHours(data[0].timeframes.daily.previous);
    playHours.innerHTML = addHours(data[1].timeframes.daily.current);
    prevPlayHours.innerHTML =
      "Yesterday - " + addHours(data[1].timeframes.daily.previous);
    studyHours.innerHTML = addHours(data[2].timeframes.daily.current);
    prevStudyHours.innerHTML =
      "Yesterday - " + addHours(data[2].timeframes.daily.previous);
    exerciseHours.innerHTML = addHours(data[3].timeframes.daily.current);
    prevExerciseHours.innerHTML =
      "Yesterday - " + addHours(data[3].timeframes.daily.previous);
    socialHours.innerHTML = addHours(data[4].timeframes.daily.current);
    prevSocialHours.innerHTML =
      "Yesterday - " + addHours(data[4].timeframes.daily.previous);
    selfCareHours.innerHTML = addHours(data[5].timeframes.daily.current);
    prevSelfCareHours.innerHTML =
      "Yesterday - " + addHours(data[5].timeframes.daily.previous);
  });
  weekly.addEventListener("click", () => {
    daily.classList.remove("selected");
    weekly.classList.add("selected");
    monthly.classList.remove("selected");
    workHours.innerHTML = addHours(data[0].timeframes.weekly.current);
    prevWorkHours.innerHTML =
      "Last Week - " + addHours(data[0].timeframes.weekly.previous);
    playHours.innerHTML = addHours(data[1].timeframes.weekly.current);
    prevPlayHours.innerHTML =
      "Last Week - " + addHours(data[1].timeframes.weekly.previous);
    studyHours.innerHTML = addHours(data[2].timeframes.weekly.current);
    prevStudyHours.innerHTML =
      "Last Week - " + addHours(data[2].timeframes.weekly.previous);
    exerciseHours.innerHTML = addHours(data[3].timeframes.weekly.current);
    prevExerciseHours.innerHTML =
      "Last Week - " + addHours(data[3].timeframes.weekly.previous);
    socialHours.innerHTML = addHours(data[4].timeframes.weekly.current);
    prevSocialHours.innerHTML =
      "Last Week - " + addHours(data[4].timeframes.weekly.previous);
    selfCareHours.innerHTML = addHours(data[5].timeframes.weekly.current);
    prevSelfCareHours.innerHTML =
      "Last Week - " + addHours(data[5].timeframes.weekly.previous);
  });
  monthly.addEventListener("click", () => {
    daily.classList.remove("selected");
    weekly.classList.remove("selected");
    monthly.classList.add("selected");
    workHours.innerHTML = addHours(data[0].timeframes.monthly.current);
    prevWorkHours.innerHTML =
      "Last Month - " + addHours(data[0].timeframes.monthly.previous);
    playHours.innerHTML = addHours(data[1].timeframes.monthly.current);
    prevPlayHours.innerHTML =
      "Last Month - " + addHours(data[1].timeframes.monthly.previous);
    studyHours.innerHTML = addHours(data[2].timeframes.monthly.current);
    prevStudyHours.innerHTML =
      "Last Month - " + addHours(data[2].timeframes.monthly.previous);
    exerciseHours.innerHTML = addHours(data[3].timeframes.monthly.current);
    prevExerciseHours.innerHTML =
      "Last Month - " + addHours(data[3].timeframes.monthly.previous);
    socialHours.innerHTML = addHours(data[4].timeframes.monthly.current);
    prevSocialHours.innerHTML =
      "Last Month - " + addHours(data[4].timeframes.monthly.previous);
    selfCareHours.innerHTML = addHours(data[5].timeframes.monthly.current);
    prevSelfCareHours.innerHTML =
      "Last Month - " + addHours(data[5].timeframes.monthly.previous);
  });
}

loadJSON();

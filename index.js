import { createTeams, createTeamsV2, teamsToString } from "./createTeam.js";
import { members, TEAM_SIZE } from "./data.js";
import { sendWebhook } from "./MMdeploy.js";
import { loadPreviousTeams, loadPreviousWeights } from "./setLog.js";

function getPrevTeams() {
  const prevTeams = loadPreviousTeams();

  return prevTeams != null //
    ? prevTeams.data
    : members;
}

function getPrevWeight(teams) {
  const getPrevWeights = loadPreviousWeights(teams);

  return getPrevWeights;
}

// 배포 로직
async function deploy() {
  const teams = getPrevTeams();
  const weights = getPrevWeight(teams);

  // const message = teamsToString(createTeams(teams, TEAM_SIZE)); // 이전 로직직
  const message = teamsToString(createTeamsV2(teams, weights, TEAM_SIZE));

  await sendWebhook(message);
}

// 디버깅용
// const teams = getPrevTeams();
// const weights = getPrevWeight(teams);
// console.log(teamsToString(createTeamsV2(teams, weights, TEAM_SIZE)));
// console.log(teamsToString(createTeams(getPrevTeams(), TEAM_SIZE)));
// 배포 스크립트 실행
deploy();

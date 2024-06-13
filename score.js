const output = [];

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  // Ran every time a balls drops into a bucket
  output.push([dropPosition, bounciness, size, bucketLabel])

  console.log(output);
}

function runAnalysis() {
  // Write code here to analyze stuff
}


const input = await Bun.file(`${import.meta.dir}/input.txt`).text();

const result = input
  .split("\n")
  .slice(0, 10)
  .map((line) => line.match(/\d+/g))
  .filter((match): match is RegExpMatchArray => !!match)
  .map((match) => match.join(""));

console.log(result);

const end = result.reduce((previous, current) => {
  if (current.length === 1) {
    return previous + Number(current);
  } else {
    return previous + Number(`${current[0]}${current[current.length - 1]}`);
  }
}, 0);

console.log(end)
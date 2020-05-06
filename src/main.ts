export function getHelloMessage(name: string) {
  return `hello ${name}`;
}

function main() {
  getHelloMessage("world");
}

main();

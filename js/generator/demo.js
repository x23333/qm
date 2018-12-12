function* listPeople() {
  let i = 1;
  yield i;
  i++;
  yield i;
  i++;
  yield i;
}
const people = listPeople()
while(!people.next().done) {
console.log(people.next());

}

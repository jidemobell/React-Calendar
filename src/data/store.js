const myStorage = window !== "undefined" && window.localStorage

const data = [
  {
    title: "Estonia Jazz Fest",
    date: "27-12-2017",
    description: "Annual Estonia Jazz festival",
    time: "22:11"
  },
  {
    title: "Tallin Java Meetup",
    date: "01-01-2018",
    description: "A hangout for Java Devs",
    time: "22:11"
  },
  {
    title: "Tallin svelte Meetup",
    date: "01-04-2021",
    description: "A hangout for svelte Devs",
    time: "14:50"
  },
  {
    title: "Tallin svelte Meetup",
    date: "10-04-2021",
    description: "A hangout for svelte Devs",
    time: "18:50"
  },
];


export const initStorage = () => {
   myStorage.setItem("events", JSON.stringify(data))
}
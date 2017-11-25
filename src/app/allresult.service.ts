import { Injectable } from "@angular/core";

@Injectable()
export class AllresultService {
  results;
  constructor() {
    this.results = [
      {
        id: "1",
        description: "This is good stuff, please mujhe kharid lo",
        image: "https://i.ytimg.com/vi/HUqroQP1AY4/hqdefault.jpg",
        title: "Lui Sarkar"
      },
      {
        id: "2",
        description:
          "Sarkar farmanday ne jo siili ka munkir hai woh bara bhenchod hai",
        image: "https://i.ytimg.com/vi/rJZrqERRQPc/hqdefault.jpg",
        title: "Rafay Chutia"
      },
      {
        id: "3",
        description: "This is good stuff, please mujhe kharid lo",
        image: "https://i.ytimg.com/vi/HUqroQP1AY4/hqdefault.jpg",
        title: "Abdullah And rafay"
      },
      {
        id: "4",
        description:
          "Sarkar farmanday ne jo siili ka munkir hai woh bara bhenchod hai",
        image: "https://i.ytimg.com/vi/rJZrqERRQPc/hqdefault.jpg",
        title: "Bori walay baba"
      },
      {
        id: "5",
        description: "This is good stuff, please mujhe kharid lo",
        image: "https://i.ytimg.com/vi/HUqroQP1AY4/hqdefault.jpg",
        title: "Aunty Bharwi"
      },
      {
        id: "6",
        description:
          "Sarkar farmanday ne jo siili ka munkir hai woh bara bhenchod hai",
        image: "https://i.ytimg.com/vi/rJZrqERRQPc/hqdefault.jpg",
        title: "Bori walay baba"
      }
    ];
  }

  getResults() {
    return this.results;
  }

  private search(query):any{
    return this.results.filter( (result =>{
      const concat = `${result.title} ${result.description}`;
      return concat.toLowerCase().includes(query.toLowerCase());
    }));
  }

  searchStuff(searchStr=''){
    return this.search(searchStr);
  }

  searchQty(searchStr='', qty=4){
    return this.search(searchStr).slice(0, qty);
  }
}

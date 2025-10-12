const data = [
  {
    title: "Book One",
    verses: [
      {
        topic: "God`s Plan",
        reference: "Jeremaiah 29:11",
        content:
          "For I know the plans I have for you declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future",
      },{
        topic: "Man's Problem",
        reference: "Isaiah 59: 2",
        content: "But your iniquities have separated you from your God; your sins have hidden his face from you, so that he will not hear."
      }, {
        topic: "Jesus The Man",
        reference: "1 Timothy 2:5-6a",
        content: "For there is one God and one mediator between God and mankind, the man Christ Jesus, who gave himself as a ransom for all people."
      }, {
        topic: "God's Remedy",
        reference: "1 Peter 3:18",
        content: "For Christ also suffered once for sins, the righteous for the unrighteous, to bring you to God."
      }, {
        topic: "Man's Response",
        reference: "John 5:24",
        content: "Very truly I tell you, whoever hears my word and believes him who sent me has eternal life and will not be judged but has crossed over from death to life."
      }, {
        topic: "God's Promise",
        reference: "John 1:12",
        content: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God."
      }
    ],
  }, {
    title: "Book Two",
    verses: [
      {
        topic: "Quiet Time",
        reference: "Psalms 143:8",
        content: "Let the morning bring me word of your unfailing love, for I have put my trust in you. Show me the way I should go, for to you I entrust my life.",
      }, {
        topic: "Assurance of Salvation",
        reference: "1 John 11:11-12",
        content: "And this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life.",
      }, {
        topic: "Assurance OF Deliverance and Protection",
        reference: "1 John 4:4",
        content: "You, dear children, are from God and have overcome them, because the one who is in you is greater than the one who is in the world."
      }, {
        topic: "Assurance of Forgiveness",
        reference: "1 John 1:9",
        content: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness."
      }, {
        topic: "Assurance of God's Help",
        reference: "Hebrews 4:16",
        content: "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need."
      }, {
        topic: "Assurance of the Spirit's Presence",
        reference: "1 Corinthians 6:19-20",
        content: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies."
      }, {
        topic: "Assurance of Guidance",
        reference: "Proverbs 3:5-6",
        content: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."
      }, {
        topic: "Assurance of Victory",
        reference: "1 Corinthians 10:13",
        content: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear."
      }
    ],
  },
];

const generateValues = () => {
  let x = [];
  const index = Math.floor(Math.random() * data.length);

  const verse = Math.floor(Math.random() * data[index].verses.length);

  x.push(data[index].title, data[index].verses[verse]);

  return x;
};

generateValues();

const getElements = () => {
  let gen = generateValues();

  const Parent = document.getElementById("root");
  const Div = document.createElement("div");

  const Book = document.createElement("h2");
  const Topic = document.createElement("h3");
  const Reference = document.createElement("h4");
  const Content = document.createElement("p");


  Book.className = "book";
  Book.innerText = gen[0];

  Topic.className = "topic";
  Topic.innerText = gen[1].topic;

  Reference.className = "reference";
  Reference.innerText = gen[1].reference;

  Content.className = "content";
  Content.innerText = gen[1].content;

  Div.append(Topic, Reference, Content);
  Parent.append(Book, Div);
};

getElements();

const getVerse = () => {
  let gen = generateValues();

  const Parent = document.getElementById("root");
  const Div = document.createElement("div");

  const Book = document.createElement("h2");
  const Topic = document.createElement("h3");
  const Reference = document.createElement("h4");
  const Content = document.createElement("p");

  Book.className = "book";
  Book.innerText = gen[0];

  Topic.className = "topic";
  Topic.innerText = gen[1].topic;

  Reference.className = "reference";
  Reference.innerText = gen[1].reference;

  Content.className = "content";
  Content.innerText = gen[1].content;

  Div.replaceChildren(Topic, Reference, Content);
  Parent.replaceChildren(Book, Div);
};
document.getElementById("newverse").addEventListener("click", getVerse);

// document.getElementById("verse-form").addEventListener("submit", function(event) {
//     event.preventDefault();
//     const verseInput = document.getElementById("verse-input").value;
//     if (verseInput) {
//         // Here you would typically look up the verse in your data
//         // For demonstration, we'll just log it to the console
//         console.log("User entered verse reference:", verseInput);
//         // You can implement a function to find and display the verse based on user input
//     }
// });
import { saveData, loadData } from './storage.js';

const localStorageKey = 'scriptureMemoryData';

// Example usage of saveData and loadData
const exampleData = { lastViewedVerse: 'John 3:16' };
saveData(exampleData);

const retrievedData = loadData();
console.log('Retrieved Data:', retrievedData);
// Using NIV Translation
const data = [
  {
    title: "Book One",
    verses: [
      {
        topic: "God's Plan",
        reference: "Jeremiah 29:11",
        content:
          "For I know the plans I have for you declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future",
      },
      {
        topic: "Man's Problem",
        reference: "Isaiah 59: 2",
        content:
          "But your iniquities have separated you from your God; your sins have hidden his face from you, so that he will not hear.",
      },
      {
        topic: "Jesus The Man",
        reference: "1 Timothy 2:5-6a",
        content:
          "For there is one God and one mediator between God and men, the man Christ Jesus, who gave himself as a ransom for all men.",
      },
      {
        topic: "God's Remedy",
        reference: "1 Peter 3:18",
        content:
          "For Christ died for sins once for all, the righteous for the unrighteous, to bring you to God. He was put to death in the body but made alive by the Spirit.",
      },
      {
        topic: "Man's Response",
        reference: "John 5:24",
        content:
          "Very truly I tell you, whoever hears my word and believes him who sent me has eternal life and will not be condemned but has crossed over from death to life.",
      },
      {
        topic: "God's Promise",
        reference: "John 1:12",
        content:
          "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God",
      },
    ],
  },
  {
    title: "Book Two",
    verses: [
      {
        topic: "Quiet Time",
        reference: "Psalms 143:8",
        content:
          "Let the morning bring me word of your unfailing love, for I have put my trust in you. Show me the way I should go, for to you I lift up my soul.",
      },
      {
        topic: "Assurance of Salvation",
        reference: "1 John 11:11-12",
        content:
          "And this is the testimony: God has given us eternal life, and this life is in his Son. He who has the Son has life; he who does not have the Son of God does not have life.",
      },
      {
        topic: "Assurance Of Deliverance and Protection",
        reference: "1 John 4:4",
        content:
          "You, dear children, are from God and have overcome them, because the one who is in you is greater than the one who is in the world.",
      },
      {
        topic: "Assurance of Forgiveness",
        reference: "1 John 1:9",
        content:
          "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
      },
      {
        topic: "Assurance of God's Help",
        reference: "Hebrews 4:16",
        content:
          "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.",
      },
      {
        topic: "Assurance of the Spirit's Presence",
        reference: "1 Corinthians 6:19-20",
        content:
          "Do you not know that your body is a temple of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your body.",
      },
      {
        topic: "Assurance of Guidance",
        reference: "Proverbs 3:5-6",
        content:
          "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways acknowledge him, and he will make your paths straight.",
      },
      {
        topic: "Assurance of Victory",
        reference: "1 Corinthians 10:13",
        content:
          "No temptation has seized you except what is common to man. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can stand up under it.",
      },
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

const pList = document.getElementById("participant-list");

if (pList.innerHTML === "") {
  pList.className = "no-participants";
  pList.innerText = "No participants added yet.";
} else {
  pList.className = "participant-table";
}

const addParticipant = () => {
  const addParticipantButton = document.getElementById("addparticipant");
  
  addParticipantButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission behavior and page reload

    const participantInput = document.getElementById("participant");
    const participantNameValue = participantInput.value.trim();

    if (participantNameValue !== "") {
      // table logic to add participant
      const participantList = document.getElementById("participant-list") || (() => {
        const table = document.createElement("table");
        table.id = "participant-table";
        const headerRow = document.createElement("tr");
        const nameHeader = document.createElement("th");
        const scoreHeader = document.createElement("th");
        nameHeader.innerText = "Participant Name";
        scoreHeader.innerText = "Score";
        headerRow.appendChild(nameHeader);
        headerRow.appendChild(scoreHeader);
        table.appendChild(headerRow);
        document.getElementById("participant-list").appendChild(table);
        return table;
      })();
      const participantTr = document.createElement("tr");
      const participantNameElement = document.createElement("td");
      const participantScoreElement = document.createElement("td");
      participantNameElement.innerText = participantNameValue;
      participantScoreElement.innerText = "0"; // Default score

      participantTr.className = "participant";
      participantNameElement.className = "participant-name";
      participantScoreElement.className = "participant-score";

      participantTr.appendChild(participantNameElement);
      participantTr.appendChild(participantScoreElement);
      participantList.appendChild(participantTr);
      participantInput.value = "";
      }
  });
}

addParticipant();

document.getElementById("newverse").addEventListener("click", getVerse);

// import { saveData, loadData } from "./storage.js";

// const localStorageKey = "scriptureMemoryData";

// // Example usage of saveData and loadData
// const exampleData = { lastViewedVerse: "John 3:16" };
// saveData(exampleData);

// const retrievedData = loadData();
// console.log("Retrieved Data:", retrievedData);

//static global variable to hold all of the stories that exist for full score report
let allStories = ["Cyrus's Story", "Alex's Story", "Patrick's Story", "Sara's Story", "Molly's Story", "Joshua's Story", "Samuel's Story"];

//static global variable to hold all story competency codes
//it's in order from first story to last in allStories
let storyCompetencies = ["Detentions", "Mixed Status In Public", "Undocumented at School", "Undocumented at Home", "Undocumented in Public", "Mixed Status at School", "Mixed Status at Household"];

//static global variable to hold all question descriptions from each story
//it's in order from first story to last in allStories, then first question to last
let storyQuestionDescriptions = [
  ["Should you answer questions when you can exercise your 5th Amendment rights?", "Should you run away from police?", "Should you ask for a lawyer before answering questions?", "Can you refuse an immigration interview if not part of a criminal investigation?", "Should you sign papers without a lawyer?", "Are you entitled to a free lawyer always?", "Should you sign papers without a lawyer?", "Can you get an interpreter at court?", "Should you reveal pertinent information to the judge?", "Should you follow court instructions?"],
  ["Are you required to speak to law enforcement always?", "Are you required to allow law enforcement to search your bags?", "Can you leave the presence of law enforcement if not being detained?"],
  ["Can you attend school as an undocumented person?", "Are you required to speak to law enforcement always?"],
  ["Are you required to let an ICE agent in your home?", "Are you required to let an ICE agent in your home?"],
  ["Are you required to speak to law enforcement always?", "Should you lie to law enforcement?", "Can you take a video during interactions with law enforcement?"],
  ["Can you attend school as an undocumented person?", "Are you required to answer immigration questions to non-law enforcement authority figures?", "Does a school have the right to search your locker/belongings?"],
  ["Are you required to let an ICE agent in your home?", "Should you lie to an ICE agent?"]
];

//static global variable to hold all of the stories descriptions for full score report
//it's in order from first story to last in allStories
let storyDescriptions = ["A story about detentions, knowing your rights during these proceedings, and how to react to them.", "A story about how to react to ICE/law enforcement when encountering law enforcement in public.", "A story about meeting law enforcement at school.", "A story about meeting law enforcement at home.", "A story about meeting law enforcement in public.", "A story about dealing with immigration issues at school.", "A story about talking to ICE when with mixed immigration status family members."];
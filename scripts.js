const websites = [
  { name: "Microsoft Teams", url: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software" },
  { name: "Salesforce", url: "https://www.salesforce.com" },
  { name: "Zendesk", url: "https://www.zendesk.com" },
  { name: "HubSpot", url: "https://www.hubspot.com" },
  { name: "Mailchimp", url: "https://mailchimp.com" },
  { name: "SendGrid", url: "https://sendgrid.com" },
  { name: "Canva", url: "https://www.canva.com" },
  { name: "Adobe Creative Cloud", url: "https://www.adobe.com/creativecloud.html" },
  { name: "Figma", url: "https://www.figma.com" },
  { name: "Sketch", url: "https://www.sketch.com" },
  { name: "InVision", url: "https://www.invisionapp.com" },
  { name: "Notion", url: "https://www.notion.so" },
  { name: "Evernote", url: "https://evernote.com" },
  { name: "Trello", url: "https://trello.com" },
  { name: "Asana", url: "https://asana.com" },
  { name: "Jira", url: "https://www.atlassian.com/software/jira" },
  { name: "Slack", url: "https://slack.com" },
  { name: "Dropbox", url: "https://www.dropbox.com" },
  { name: "Google Drive", url: "https://drive.google.com" },
  { name: "OneDrive", url: "https://onedrive.live.com" },
  { name: "GitHub", url: "https://github.com" },
  { name: "GitLab", url: "https://gitlab.com" },
  { name: "Bitbucket", url: "https://bitbucket.org" },
  { name: "Stack Overflow", url: "https://stackoverflow.com" },
  { name: "Reddit", url: "https://www.reddit.com" },
  { name: "Quora", url: "https://www.quora.com" },
  { name: "Medium", url: "https://medium.com" },
  { name: "LinkedIn", url: "https://www.linkedin.com" },
  { name: "Facebook", url: "https://www.facebook.com" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Instagram", url: "https://www.instagram.com" },
  { name: "YouTube", url: "https://www.youtube.com" },
  { name: "Netflix", url: "https://www.netflix.com" },
  { name: "Amazon", url: "https://www.amazon.com" },
  { name: "Flipkart", url: "https://www.flipkart.com" },
  { name: "Myntra", url: "https://www.myntra.com" },
  { name: "eBay", url: "https://www.ebay.com" },
  { name: "AliExpress", url: "https://www.aliexpress.com" },
  { name: "Craigslist", url: "https://www.craigslist.org" },
  { name: "Walmart", url: "https://www.walmart.com" },
  { name: "Target", url: "https://www.target.com" },
  { name: "Best Buy", url: "https://www.bestbuy.com" },
  { name: "Spotify", url: "https://www.spotify.com" },
  { name: "SoundCloud", url: "https://soundcloud.com" },
  { name: "BBC", url: "https://www.bbc.com" },
  { name: "CNN", url: "https://www.cnn.com" },
  { name: "The New York Times", url: "https://www.nytimes.com" },
  { name: "Wikipedia", url: "https://www.wikipedia.org" },
  { name: "Dropbox Paper", url: "https://paper.dropbox.com" },
  { name: "Calendly", url: "https://calendly.com" },
  { name: "Zoom", url: "https://zoom.us" },
  { name: "Google Meet", url: "https://meet.google.com" },
  { name: "Microsoft Outlook", url: "https://outlook.live.com" },
  { name: "ProtonMail", url: "https://protonmail.com" },
  { name: "Gmail", url: "https://mail.google.com" },
  { name: "Yahoo Mail", url: "https://mail.yahoo.com" },
  { name: "DuckDuckGo", url: "https://duckduckgo.com" },
  { name: "Bing", url: "https://www.bing.com" },
  { name: "Google Search", url: "https://www.google.com" },
  { name: "Yelp", url: "https://www.yelp.com" },
  { name: "TripAdvisor", url: "https://www.tripadvisor.com" },
  { name: "Airbnb", url: "https://www.airbnb.com" },
  { name: "Booking.com", url: "https://www.booking.com" },
  { name: "Expedia", url: "https://www.expedia.com" },
  { name: "Skyscanner", url: "https://www.skyscanner.net" },
  { name: "Kayak", url: "https://www.kayak.com" },
  { name: "Indeed", url: "https://www.indeed.com" },
  { name: "Glassdoor", url: "https://www.glassdoor.com" },
  { name: "Monster", url: "https://www.monster.com" },
  { name: "Coursera", url: "https://www.coursera.org" },
  { name: "Udemy", url: "https://www.udemy.com" },
  { name: "edX", url: "https://www.edx.org" },
  { name: "Khan Academy", url: "https://www.khanacademy.org" },
  { name: "Duolingo", url: "https://www.duolingo.com" },
  { name: "Codecademy", url: "https://www.codecademy.com" },
  { name: "LeetCode", url: "https://leetcode.com" },
  { name: "HackerRank", url: "https://www.hackerrank.com" },
  { name: "GitHub Gist", url: "https://gist.github.com" },
  { name: "Bitly", url: "https://bitly.com" },
  { name: "TinyURL", url: "https://tinyurl.com" },
  { name: "IFTTT", url: "https://ifttt.com" },
  { name: "Zapier", url: "https://zapier.com" },
  { name: "Pocket", url: "https://getpocket.com" },
  { name: "Todoist", url: "https://todoist.com" },
  { name: "Microsoft To Do", url: "https://todo.microsoft.com" },
  { name: "Google Keep", url: "https://keep.google.com" },
  { name: "LastPass", url: "https://www.lastpass.com" },
  { name: "1Password", url: "https://1password.com" },
  { name: "Dashlane", url: "https://www.dashlane.com" },
  { name: "NordVPN", url: "https://nordvpn.com" },
  { name: "ExpressVPN", url: "https://www.expressvpn.com" },
  { name: "TunnelBear", url: "https://www.tunnelbear.com" },
  { name: "ProtonVPN", url: "https://protonvpn.com" },
  { name: "Canva", url: "https://www.canva.com" },
  { name: "Pixabay", url: "https://pixabay.com" },
  { name: "Unsplash", url: "https://unsplash.com" },
  { name: "Pexels", url: "https://www.pexels.com" },
  { name: "Envato Elements", url: "https://elements.envato.com" },
  { name: "Freepik", url: "https://www.freepik.com" },
  { name: "Shutterstock", url: "https://www.shutterstock.com" },
  { name: "Adobe Stock", url: "https://stock.adobe.com" },
  { name: "Vimeo", url: "https://vimeo.com" },
  { name: "Dailymotion", url: "https://www.dailymotion.com" },
  { name: "Twitch", url: "https://www.twitch.tv" },
  { name: "Discord", url: "https://discord.com" },
  { name: "Telegram", url: "https://telegram.org" },
  { name: "Signal", url: "https://signal.org" },
  { name: "WhatsApp", url: "https://www.whatsapp.com" },
  { name: "WeTransfer", url: "https://wetransfer.com" },
  { name: "Google Photos", url: "https://photos.google.com" },
  { name: "iCloud", url: "https://www.icloud.com" },
  { name: "Spotify", url: "https://www.spotify.com" },
  { name: "Apple Music", url: "https://music.apple.com" },
  { name: "SoundCloud", url: "https://soundcloud.com" },
  { name: "Audible", url: "https://www.audible.com" },
  { name: "Goodreads", url: "https://www.goodreads.com" },
  { name: "Wikipedia", url: "https://www.wikipedia.org" },
  { name: "Archive.org", url: "https://archive.org" },
  { name: "Project Gutenberg", url: "https://www.gutenberg.org" },
  { name: "Craigslist", url: "https://www.craigslist.org" },
  { name: "Etsy", url: "https://www.etsy.com" },
  { name: "Shopify", url: "https://www.shopify.com" },
  { name: "WordPress", url: "https://wordpress.com" },
  { name: "Blogger", url: "https://www.blogger.com" },
  { name: "Tumblr", url: "https://www.tumblr.com" },
  { name: "Pinterest", url: "https://www.pinterest.com" },
  { name: "Flipboard", url: "https://flipboard.com" },
  { name: "Feedly", url: "https://feedly.com" },
  { name: "Pocket", url: "https://getpocket.com" },
  { name: "Medium", url: "https://medium.com" },
  { name: "Substack", url: "https://substack.com" },
  { name: "Patreon", url: "https://www.patreon.com" },
  { name: "Kickstarter", url: "https://www.kickstarter.com" },
  { name: "Indiegogo", url: "https://www.indiegogo.com" },
  { name: "GoFundMe", url: "https://www.gofundme.com" },
  { name: "PayPal", url: "https://www.paypal.com" },
  { name: "Stripe", url: "https://stripe.com" },
  { name: "Square", url: "https://squareup.com" },
  { name: "Venmo", url: "https://venmo.com" },
  { name: "Cash App", url: "https://cash.app" },
  { name: "Zelle", url: "https://www.zellepay.com" },
  { name: "Behance", url: "https://www.behance.net" },
{ name: "Dribbble", url: "https://dribbble.com" },
{ name: "CodePen", url: "https://codepen.io" },
{ name: "Glitch", url: "https://glitch.com" },
{ name: "Replit", url: "https://replit.com" },
{ name: "Mozilla Developer Network (MDN)", url: "https://developer.mozilla.org" },
{ name: "W3Schools", url: "https://www.w3schools.com" },
{ name: "Smashing Magazine", url: "https://www.smashingmagazine.com" },
{ name: "CSS-Tricks", url: "https://css-tricks.com" },
{ name: "Awwwards", url: "https://www.awwwards.com" },
{ name: "TED", url: "https://www.ted.com" },
{ name: "FutureLearn", url: "https://www.futurelearn.com" },
{ name: "MIT OpenCourseWare", url: "https://ocw.mit.edu" },
{ name: "Harvard Online Learning", url: "https://online-learning.harvard.edu" },
{ name: "Mint", url: "https://mint.intuit.com" },
{ name: "YNAB (You Need A Budget)", url: "https://www.youneedabudget.com" },
{ name: "Personal Capital", url: "https://www.personalcapital.com" },
{ name: "Canva Design School", url: "https://designschool.canva.com" },
{ name: "Envato Tuts+", url: "https://tutsplus.com" },
{ name: "Crunchbase", url: "https://www.crunchbase.com" },
{ name: "AngelList", url: "https://angel.co" },
{ name: "Product Hunt", url: "https://www.producthunt.com" },
{ name: "BetaList", url: "https://betalist.com" },
{ name: "Instructables", url: "https://www.instructables.com" },
{ name: "How-To Geek", url: "https://www.howtogeek.com" },
{ name: "Lifehacker", url: "https://lifehacker.com" },
{ name: "MakeUseOf", url: "https://www.makeuseof.com" },
{ name: "OpenAI", url: "https://openai.com" },
{ name: "Hugging Face", url: "https://huggingface.co" },
{ name: "DeepL Translator", url: "https://www.deepl.com" },
{ name: "Wikipedia Commons", url: "https://commons.wikimedia.org" },
{ name: "Flickr", url: "https://www.flickr.com" },
{ name: "IFTTT Recipes", url: "https://ifttt.com/discover" },
{ name: "Zapier Blog", url: "https://zapier.com/blog" },
{ name: "Unsplash API", url: "https://unsplash.com/developers" },
{ name: "Pexels API", url: "https://www.pexels.com/api/" },
{ name: "Kaggle", url: "https://www.kaggle.com" },
{ name: "Google Colab", url: "https://colab.research.google.com" },
{ name: "Towards Data Science", url: "https://towardsdatascience.com" },
{ name: "Stack Exchange Network", url: "https://stackexchange.com" },
{ name: "Super User", url: "https://superuser.com" },
{ name: "Ask Ubuntu", url: "https://askubuntu.com" },
{ name: "The Verge", url: "https://www.theverge.com" },
{ name: "Wired", url: "https://www.wired.com" },
{ name: "LifeWire", url: "https://www.lifewire.com" },
{ name: "TechCrunch", url: "https://techcrunch.com" },
{ name: "Archive of Our Own (AO3)", url: "https://archiveofourown.org" },
{ name: "FanFiction.net", url: "https://www.fanfiction.net" },
{ name: "Goodreads Author Program", url: "https://www.goodreads.com/author/program" },
{ name: "LibraryThing", url: "https://www.librarything.com" },
{ name: "Simple Wikipedia", url: "https://simple.wikipedia.org" },
{ name: "WebMD", url: "https://www.webmd.com" },
{ name: "Mayo Clinic", url: "https://www.mayoclinic.org" },
{ name: "Healthline", url: "https://www.healthline.com" },
{ name: "Coursera for Business", url: "https://www.coursera.org/business" },
{ name: "Udacity", url: "https://www.udacity.com" },
{ name: "Pluralsight", url: "https://www.pluralsight.com" },
{ name: "Kaggle Datasets", url: "https://www.kaggle.com/datasets" },
{ name: "Google Dataset Search", url: "https://datasetsearch.research.google.com" },
{ name: "WikiHow", url: "https://www.wikihow.com" },
{ name: "eHow", url: "https://www.ehow.com" },
{ name: "Coursera Project Network", url: "https://www.coursera.org/projects" },
{ name: "Skillshare", url: "https://www.skillshare.com" },
{ name: "LibriVox", url: "https://librivox.org" },
{ name: "Internet Archive Audio", url: "https://archive.org/details/audio" },
{ name: "CryptoCompare", url: "https://www.cryptocompare.com" },
{ name: "CoinMarketCap", url: "https://coinmarketcap.com" },
{ name: "CoinGecko", url: "https://www.coingecko.com" },
{ name: "IFTTT", url: "https://ifttt.com" },
{ name: "Zapier", url: "https://zapier.com" },
{ name: "RescueTime", url: "https://www.rescuetime.com" },
{ name: "Forest", url: "https://www.forestapp.cc" },
{ name: "Grammarly", url: "https://www.grammarly.com" },
{ name: "Hemingway Editor", url: "https://hemingwayapp.com" },
{ name: "Toggl Track", url: "https://toggl.com/track" },
{ name: "Clockify", url: "https://clockify.me" },
{ name: "Bitly", url: "https://bitly.com" },
{ name: "TinyURL", url: "https://tinyurl.com" },
{ name: "Calendly", url: "https://calendly.com" },
{ name: "Miro", url: "https://miro.com" },
{ name: "Lucidchart", url: "https://www.lucidchart.com" },
{ name: "Monday.com", url: "https://monday.com" },
{ name: "ClickUp", url: "https://clickup.com" },
{ name: "Notability", url: "https://www.gingerlabs.com" },
{ name: "GoodNotes", url: "https://www.goodnotes.com" },
{ name: "Zillow", url: "https://www.zillow.com" },
{ name: "Redfin", url: "https://www.redfin.com" },
{ name: "Coursera Plus", url: "https://www.coursera.org/plus" },
{ name: "Skillshare", url: "https://www.skillshare.com" },
{ name: "Codecademy Pro", url: "https://www.codecademy.com/pro" },
{ name: "Hootsuite", url: "https://hootsuite.com" },
{ name: "Buffer", url: "https://buffer.com" },
{ name: "Later", url: "https://later.com" },
{ name: "Google Analytics", url: "https://analytics.google.com" },
{ name: "Mixpanel", url: "https://mixpanel.com" },
{ name: "Hotjar", url: "https://www.hotjar.com" },
{ name: "Crazy Egg", url: "https://www.crazyegg.com" },
{ name: "Toggl Plan", url: "https://toggl.com/plan" },
{ name: "Everhour", url: "https://everhour.com" },
{ name: "Basecamp", url: "https://basecamp.com" },
{ name: "Zoho CRM", url: "https://www.zoho.com/crm" },
{ name: "Freshdesk", url: "https://freshdesk.com" },
{ name: "Intercom", url: "https://www.intercom.com" },
{ name: "Typeform", url: "https://www.typeform.com" },
{ name: "SurveyMonkey", url: "https://www.surveymonkey.com" },
{ name: "Google Forms", url: "https://forms.google.com" },
{ name: "Calendly", url: "https://calendly.com" },
{ name: "Bitbucket", url: "https://bitbucket.org" },
{ name: "CodeSandbox", url: "https://codesandbox.io" },
{ name: "Glitch", url: "https://glitch.com" },
{ name: "Repl.it", url: "https://replit.com" },
{ name: "JetBrains", url: "https://www.jetbrains.com" },
{ name: "Docker Hub", url: "https://hub.docker.com" },
{ name: "Kubernetes", url: "https://kubernetes.io" },
{ name: "DigitalOcean", url: "https://www.digitalocean.com" },
{ name: "Heroku", url: "https://www.heroku.com" },
{ name: "Netlify", url: "https://www.netlify.com" },
{ name: "Vercel", url: "https://vercel.com" },
{ name: "Glide", url: "https://www.glideapps.com" },
{ name: "Thunkable", url: "https://thunkable.com" },
{ name: "AppGyver", url: "https://www.appgyver.com" },
{ name: "Integromat (Make)", url: "https://www.make.com" },
{ name: "Twitch", url: "https://www.twitch.tv" },
{ name: "Mixcloud", url: "https://www.mixcloud.com" },
{ name: "Soundtrap", url: "https://www.soundtrap.com" },
{ name: "Anchor.fm", url: "https://anchor.fm" },
{ name: "Podbean", url: "https://www.podbean.com" },
{ name: "Libsyn", url: "https://libsyn.com" },
{ name: "Patreon", url: "https://www.patreon.com" },
{ name: "Ko-fi", url: "https://ko-fi.com" },
{ name: "Buy Me a Coffee", url: "https://www.buymeacoffee.com" },
];

// DOM references
const searchInput = document.getElementById('search');
const websitesBox = document.getElementById('websitesBox');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

// Function to render website links dynamically
function renderWebsites(filter = '') {
  const container = websitesBox.querySelector('.link-list');
  container.innerHTML = ''; // Clear previous content

  const filtered = websites.filter(site =>
    site.name.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(site => {
    const link = document.createElement('a');
    link.href = site.url;
    link.target = '_blank';
    link.textContent = site.name;
    link.classList.add('link-item');
    container.appendChild(link);
  });
}

// Initial render
renderWebsites();

// Search input event for filtering website list
searchInput.addEventListener('input', (e) => {
  renderWebsites(e.target.value);
});

// Basic chatbot function: echoes user input for now
function chatbotResponse(message) {
  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
    return "Hello! How can I assist you today?";
  }
  if (lowerMsg.includes('help')) {
    return "You can search for websites or ask me about anything!";
  }
  if (lowerMsg.includes('thank')) {
    return "You're welcome!";
  }
  return "Sorry, I didn't understand that. Please try asking something else.";
}

// Function to add chat message to the chat window
function addChatMessage(text, sender = 'user') {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('chat-message', sender);
  msgDiv.textContent = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle user input in chat
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && chatInput.value.trim() !== '') {
    const userMsg = chatInput.value.trim();
    addChatMessage(userMsg, 'user');
    chatInput.value = '';

    // Generate chatbot response
    const botReply = chatbotResponse(userMsg);
    setTimeout(() => {
      addChatMessage(botReply, 'bot');
    }, 500);
  }
});

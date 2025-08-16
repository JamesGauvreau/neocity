let author = "wyste";
let pubDate = "2017";
let title = "Harry Potter and the Problem of Potions";
let sourceName = "AO3";
let sourceURL = "https://archiveofourown.org/works/10588629/chapters/23404335";
let wordCount = "184,000";
let rating = "★★★★☆";
let synopsis = "Harry Potter is too interested in potions, and too used to the Dursleys, to realize that Snape hates him.";
let waybackURL = "https://web.archive.org/web/20250420002455/https://archiveofourown.org/works/10588629?view_full_work=true";
let postURL = "https://wmbsaltworks.wordpress.com/2025/04/29/auto-draft/"

const formattedFull = "<p align=\"justify\">" + author + ". (" + pubDate + ") \"" + title + ".\" <a href=\"" + sourceURL + "\">" + sourceName + "</a>. " + wordCount + " words. " + rating + " " + synopsis + " Wayback <a href=\"" + waybackURL + "\">here</a>.</p> <p align=\"justify\"><a href=\"" + postURL + "\">Keep reading</a> for additional notes.</p>";
const formattedConciser = "<p align=\"justify\">" + author + ". (" + pubDate + ") \"" + title + ".\" <a href=\"" + sourceURL + "\">" + sourceName + "</a>. " + wordCount + " words. " + rating + " " + synopsis + "</p> <p align=\"justify\"><a href=\"" + postURL + "\">Keep reading</a> for additional notes.</p>"

console.log(formattedConciser)
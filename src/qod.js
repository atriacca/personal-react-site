From previous version:  http://quotesondesign.com/api/3.0/api-3.0.js

var QuoteEngine=function(id,data,formatter){
    var qe=this;
    this.data=data;
    this.formatter=formatter;
    this.init=function(){
        this.id=(typeof id=="object")?id:[id];
        this.addOnloadEvent(function(){qe.replace()})};
        this.replace=function(){
            for(var i=0;i<this.id.length;i++){
                var obj=document.getElementById(this.id[i]);
                var html="";if(typeof this.formatter=="function"){
                    html=this.formatter(this.data)
                }
                else{
                    html="<p class='qod-text'>"+this.data.quote+"</p>";
                    html+="<p class='qod-author'><a href='"+this.data.permalink+"'> &mdash; "+this.data.author+"</a></p>"};
                    obj.innerHTML=html}};
                    this.addOnloadEvent=function(fnc){
                        if(typeof window.addEventListener!="undefined")window.addEventListener("load",fnc,false);
                        else if(typeof window.attachEvent!="undefined"){window.attachEvent("onload",fnc)
                }else{
                    if(window.onload!=null){
                        var oldOnload=window.onload;
                        window.onload=function(e){oldOnload(e);window[fnc]()}
                    }else 
                    window.onload=fnc}};
                        this.init()
                    }
new QuoteEngine('qod-quote', {"id":700,"quote":"Some designers create things to show you what they did. I design things to tell you what I solved.  ","author":"Brian Yerkes","permalink":"http:\/\/quotesondesign.com\/?p=700"}, null);

Don’t you miss doing creative stuff, as an engineer? Don’t you miss the creativity of the art world? You can say: I’m working on an infinite canvas capable of any size and shape, that’s already glowing every color possible into the eyes of just about everyone on the planet. And I get to decide the kind of experience, feeling, and emotion they are going to have. How is that not creative?
by Natalya Shelburne

ID: 1566
content: "<p>If you never venture outside the box, you will probably not be creative. But if you never get inside the box, you will certainly be stupid.</p>↵"
custom_meta: {Source: "<a href="http://www.psychologytoday.com/blog/the-g…fe/201011/first-think-inside-the-box">article</a>"}
link: "https://quotesondesign.com/christopher-peterson/"
title: "Christopher Peterson"

const mappedQuotes = this.state.quotes.map(quote => <Quote key={quote.ID} quotation={quote} />)
let devQuotes = ''
if(this.state.quotes){
    devQuotes = this.state.quotes.filter((dev, index) => {
        const stringArr = dev.content.split(' ')
        return this.state.devKeywords.some((devMatch, index2) => {
            return stringArr.includes(devMatch => <Quote key={devMatch.ID} quotation={devMatch} />)
        })
    })
    console.log(devQuotes)
}
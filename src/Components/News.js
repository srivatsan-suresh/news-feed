import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

    articles=[{
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Frances Vinall, Rachel Pannett, Noga Tarnopolsky, Zoeann Murphy, Miriam Berger, Whitney Shefte, Sufian Taha, Kareem Fahim, Hannah Allam, Ben Brasch, Bryan Pietsch",
        "title": "Israel-Gaza war live updates: Netanyahu says Israel is 'preparing for a ground incursion' - The Washington Post",
        "description": "Israeli Prime Minister Benjamin Netanyahu said he won’t specify details of an assault. A U.N. aid organization began to reduce operations in Gaza.",
        "url": "https://www.washingtonpost.com/world/2023/10/26/israel-war-hamas-gaza-news-palestine/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/thumbnails/653987a3edb43e061e87d753/2023-10-25T211336Z_4_RW308225102023RP1_RTRMADC_0_ISRAEL-PALESTINIANS-NETANYAHU-ROUGH-CUT.jpg&w=1440",
        "publishedAt": "2023-10-26T08:11:25Z",
        "content": "Israeli Prime Minister Benjamin Netanyahu said Wednesday that Israel was preparing for a ground incursion of the Gaza Strip, but said he wont specify when or how the incursion would happen. The publi… [+564 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Jenni Reid",
        "title": "European stocks open lower as earnings roll in; Standard Chartered plunges 10%; ECB set to hold rates - CNBC",
        "description": "European stock markets opened lower Thursday as attention remains on third-quarter earnings and government bond yields.",
        "url": "https://www.cnbc.com/2023/10/26/european-markets-open-to-close-ecb-rate-decision-.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107300646-1694690176319-gettyimages-1557162485-AFP_33Q64ZQ.jpeg?v=1698301075&w=1920&h=1080",
        "publishedAt": "2023-10-26T07:20:00Z",
        "content": "European stock markets opened sharply lower Thursday as attention remains on third-quarter earnings and government bond yields.\r\nThe regional Stoxx 600 was down 1.1% at 8:14 a.m. London time, with ne… [+1552 chars]"
    },
    {
        "source": {
            "id": "the-jerusalem-post",
            "name": "The Jerusalem Post"
        },
        "author": null,
        "title": "IDF tanks, infantry strike Hamas - Day 20 | Defense News - The Jerusalem Post",
        "description": "Over 1,400 murdered, more than 5,400 wounded • IDF: 224 captives in Gaza, two released by Hamas on Monday night",
        "url": "https://www.jpost.com/israel-news/defense-news/2023-10-26/live-updates-770189",
        "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_407,w_690/560417",
        "publishedAt": "2023-10-26T06:55:44Z",
        "content": "Russian-American rivalry prevented the United Nations Security Council from issuing its first ever condemnation of Hamas late Wednesday.\r\nBoth countries submitted resolutions to the UNSC on the Gaza … [+3360 chars]"
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "USA TODAY",
        "title": "Israel Hamas live updates: UN chief defends comments on Hamas attack - USA TODAY",
        "description": null,
        "url": "https://www.usatoday.com/story/news/world/israel-hamas/2023/10/25/israel-hamas-war-gaza-live-updates/71311772007/",
        "urlToImage": null,
        "publishedAt": "2023-10-26T04:52:30Z",
        "content": null
    },
    {
        "source": {
            "id": "espn",
            "name": "ESPN"
        },
        "author": "Andrew Lopez",
        "title": "Victor Wembanyama finishes with 15 points in debut as Spurs lose - ESPN - ESPN",
        "description": "Hampered by foul trouble in his debut, Victor Wembanyama rebounded to put on a show in the fourth quarter, when he scored nine of his 15 points, but the Spurs fell 126-119 to the Mavs on Wednesday night.",
        "url": "https://www.espn.com/nba/story/_/id/38746746/victor-wembanyama-15-points-debut-spurs-lose",
        "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1026%2Fr1243793_1296x729_16%2D9.jpg",
        "publishedAt": "2023-10-26T04:34:00Z",
        "content": "SAN ANTONIO -- As Victor Wembanyama walked on to the Frost Bank Center court during pregame warmups for his NBA regular-season debut, he spread his arms across the tunnel to high-five fans on both si… [+4013 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Nidal Al-Mughrabi, Henriette Chacar",
        "title": "Israel bombards Gaza as Putin warns conflict could spread beyond Middle East - Reuters",
        "description": "Israel bombarded the Gaza Strip as it prepared for a <a href=\"/world/middle-east/netanyahu-says-israel-is-preparing-ground-invasion-gaza-2023-10-25/\">ground invasion</a> it says is aimed at annihilating the Palestinian militant group Hamas as Russia warned th…",
        "url": "https://www.reuters.com/world/middle-east/israel-bombards-gaza-prepares-invasion-biden-urges-path-two-states-2023-10-25/",
        "urlToImage": "https://www.reuters.com/resizer/dpIQ34Yc3pXqFjy66ZR_LFR3AZc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/INU5HVP7TZKA3MJBR467DM7XJI.jpg",
        "publishedAt": "2023-10-26T04:20:01Z",
        "content": "GAZA/JERUSALEM, Oct 26 (Reuters) - Israel bombarded the Gaza Strip as it prepared for a ground invasion it says is aimed at annihilating the Palestinian militant group Hamas as Russia warned the conf… [+5504 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Eonline.com"
        },
        "author": "Kisha Forde",
        "title": "Kris Jenner Shares Why She Cheated on Robert Kardashian - E! NEWS",
        "description": "Kris Jenner opened up about why she says she cheated on her ex-husband Robert Kardashian, Sr. during the Oct. 26 episode of The Kardashians.",
        "url": "https://www.eonline.com/news/1388464/kris-jenner-shares-why-she-cheated-on-robert-kardashian",
        "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2023924/rs_1200x1200-231024124412-KrisRobert_SPLIT_.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
        "publishedAt": "2023-10-26T04:00:00Z",
        "content": "For Kris, her perspective comes amid watching Khloe navigate her co-parenting relationship with her ex Tristan Thompson, with whom she shares kids True, 5, and Tatum, 14 months. Despite the former co… [+757 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "UAW strike: Ford and union agree record pay rise in tentative deal - BBC.com",
        "description": "The tentative deal with the striking union to end the six-week walkout includes a record pay rise.",
        "url": "https://www.bbc.com/news/business-67224476",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7673/production/_131532303_gettyimages-1728335830-1.jpg",
        "publishedAt": "2023-10-26T03:45:13Z",
        "content": "Ford and the United Auto Workers (UAW) union have reached a tentative deal, which includes a record pay rise, to end a nearly six-week strike.\r\nThe agreement would be the first settlement of strikes … [+2406 chars]"
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "Lisa Rozner",
        "title": "Pro-Palestinian rally at Cooper Union leads to tense moments at school library - CBS New York",
        "description": "Students who are pro-Israel say they felt unsafe as pro-Palestinian demonstrators chanted outside the library.",
        "url": "https://www.cbsnews.com/newyork/news/cooper-union-pro-palestinian-rally-jewish-students-library/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/10/26/636e4f4e-ddd1-4fdd-9ed1-1fe9818d8c05/thumbnail/1200x630/7b5b7969e6688255ee12757393e4415e/rozner-11p-pkg-cooper-u-wcbs89rw-hi-res-still.jpg?v=287f03e8b6c956e3847aad6c604a17dd",
        "publishedAt": "2023-10-26T03:44:00Z",
        "content": "NEW YORK -- There were tense moments at the campus of Cooper Union in Manhattan on Wednesday afternoon.\r\nStudents who are pro-Israel say they felt unsafe as pro-Palestinian demonstrators banged and c… [+3668 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hollywood Reporter"
        },
        "author": "Caitlin Huston",
        "title": "Jonathan Majors’ Accuser Arrested for Misdemeanor Assault and Criminal Mischief, DA Has No Plans to Press Charges - Hollywood Reporter",
        "description": "Grace Jabbari, the woman who has accused Jonathan Majors of attacking her on March 25, was arrested late Wednesday at the 10th precinct in Manhattan.",
        "url": "https://www.hollywoodreporter.com/news/general-news/jonathan-majors-accuser-grace-jabbari-arrested-1235625694/",
        "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/GettyImages-1574652225-H-2023.jpg?w=1024",
        "publishedAt": "2023-10-26T03:00:48Z",
        "content": "Grace Jabbari, the woman who has accused Jonathan Majors of attacking her on March 25, has been arrested on suspicion of misdemeanor assault and misdemeanor criminal mischief. \r\nJabbari was arrested … [+1887 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": null,
        "title": "Before and after satellite images show destruction in Gaza - CNN",
        "description": "New satellite images released by Maxar show significant damage to sites across Gaza.",
        "url": "https://www.cnn.com/2023/10/25/middleeast/satellite-images-gaza-destruction/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/06-after-bombing-izbat-beit-hanoun-gaza-21oct2023-wv02.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-10-26T02:56:00Z",
        "content": "Israel has been at war with Hamas since October 7, after the Palestinian militant group launched surprise cross-border raids from Gaza.\r\nIn response, Israel has been launching airstrikes on Gaza, and… [+136 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Investor's Business Daily"
        },
        "author": "Investor's Business Daily",
        "title": "Dow Jones Futures Fall: S&P 500, Nasdaq Tumble As Google Dives; Meta Reverses Lower - Investor's Business Daily",
        "description": "The S&P 500 and Nasdaq rally attempts are over. Amazon earnings loom.",
        "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-sp-500-nasdaq-breaks-lows-google-dives-meta-rises-late-amazon-on-tap/",
        "urlToImage": "https://www.investors.com/wp-content/uploads/2023/08/Stock-MarketDown-arrow-adobe.jpg",
        "publishedAt": "2023-10-26T02:35:00Z",
        "content": "Dow Jones futures fell modestly overnight, with S&amp;P 500 futures and especially Nasdaq futures declining solidly. Meta Platforms (META) and ServiceNow (NOW) headlined earnings reports, with Amazon… [+7990 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Space.com"
        },
        "author": "Robert Z. Pearlman",
        "title": "Cosmonauts on ISS spacewalk encounter toxic coolant 'blob' while inspecting leaky radiator - Space.com",
        "description": "Oleg Kononenko and Nikolai Chub were ordered to evacuate the area after tether became contaminated.",
        "url": "https://www.space.com/russian-spacewalk-nauka-radiator-leak-october-2023",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/NDqNNk65Xgjnrzm4cRThgY-1200-80.jpg",
        "publishedAt": "2023-10-26T02:31:25Z",
        "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
    },
    {
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "author": null,
        "title": "Special counsel urges judge to reimpose Trump's federal gag order - POLITICO",
        "description": "Prosecutors say Trump’s recent verbal attacks show he’s a threat to D.C. proceedings — and the safety of witnesses.",
        "url": "https://www.politico.com/news/2023/10/25/special-counsel-trump-federal-gag-order-00123676",
        "urlToImage": "https://static.politico.com/e4/29/e251ed154c969085c5be62ad82b2/aptopix-trump-fraud-lawsuit-87034.jpg",
        "publishedAt": "2023-10-26T01:54:27Z",
        "content": "The defendant has returned to the very sort of targeting that the Order prohibits, including attempting to intimidate and influence foreseeable witnesses, and commenting on the substance of their tes… [+4635 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "KABC-TV"
        },
        "author": null,
        "title": "Malibu crash: Driver pleads not guilty to murder in PCH collision that killed Pepperdine students - KABC-TV",
        "description": "The driver in a Malibu crash that killed four Pepperdine University students pleaded not guilty to murder in court, and prosecutors released additional details about the horrific incident.",
        "url": "https://abc7.com/malibu-crash-pepperdine-students-killed-fraser-bohm-not-guilty/13971211/",
        "urlToImage": "https://cdn.abcotvs.com/dip/images/13972809_102523-kabc-6pm-malibu-pch-fatals-vid-CC-vid.jpg?w=1600",
        "publishedAt": "2023-10-26T01:52:30Z",
        "content": "MALIBU, Calif. (KABC) -- The driver in a Malibu crash that killed four Pepperdine University students pleaded not guilty to murder during his first court appearance Wednesday, and prosecutors said he… [+3006 chars]"
    },
    {
        "source": {
            "id": "the-hill",
            "name": "The Hill"
        },
        "author": "The Hill",
        "title": "Gaetz: Johnson victory proves MAGA power over Republican party - The Hill",
        "description": null,
        "url": "https://thehill.com/homenews/house/4275944-gaetz-johnson-victory-proves-maga-power/",
        "urlToImage": null,
        "publishedAt": "2023-10-26T01:47:00Z",
        "content": null
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Sara Smart, John Miller",
        "title": "Suspect at large after 2 active shooter incidents in area of Lewiston, Maine, sheriff says - CNN",
        "description": "Authorities in Maine are investigating two active shooter events and a suspect remains at large, the Androscoggin County Sheriff’s Office said.",
        "url": "https://www.cnn.com/2023/10/25/us/lewiston-maine-shooting/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231025155608-lewiston-me-police-activity.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-10-26T00:34:00Z",
        "content": "[Breaking news update, published at 9:10 p.m ET]\r\nAt least 16 people are dead in multiple shootings in Lewiston, Maine, Wednesday night, according to multiple law enforcement sources.\r\nFifty to 60 pe… [+1512 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Brenda Goodman",
        "title": "Covid shots may slightly increase risk of stroke in older adults, particularly when administered with certain flu vaccines - CNN",
        "description": "Vaccines for Covid-19 and influenza may slightly increase the risk of strokes caused by blood clots in the brains of seniors, particularly when the two vaccines are given at the same time and when they are given to adults who are age 85 and older.",
        "url": "https://www.cnn.com/2023/10/25/health/a-new-study-flags-a-link-between-covid-19-and-influenza-vaccines-and-stroke-in-older-adults-but-experts-say-vaccination-is-still-your-best-bet/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231012132127-updated-covid-vaccine-091523.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-10-26T00:06:00Z",
        "content": "Vaccines for Covid-19 and influenza may slightly increase the risk of strokes caused by blood clots in the brains of seniors, particularly when the two vaccines are given at the same time and when th… [+6396 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Times of Israel"
        },
        "author": "Alexander Fulbright",
        "title": "IDF briefly sends tanks, troops into northern Gaza in ‘targeted raid’ overnight - The Times of Israel",
        "description": "Tanks, troops briefly foray into northern Gaza in 'targeted raid' overnight to prepare for larger ground assault * Biden and Netanyahu talk, discuss freeing hostages",
        "url": "https://www.timesofisrael.com/biden-and-pm-discuss-freeing-hostages-held-by-hamas-letting-foreigners-out-of-gaza/",
        "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/10/33YY94X-highres.jpg",
        "publishedAt": "2023-10-26T00:01:54Z",
        "content": "Saleh al-Arouri, the Lebanon-based deputy head of the Hamas political bureau, says that the battles have not begun yet.\r\nIn a phone interview with al-Manar, the TV channel of Hezbollah, al-Arouri say… [+964 chars]"
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "Aliza Chasan",
        "title": "Skeletons discovered in \"incredibly rare\" 5,000-year-old tomb in Scotland - CBS News",
        "description": "Archaeologists unearthed the ruins of a 5,000-year-old tomb with 14 articulated skeletons inside, Scotland's national museums organization announced Tuesday.",
        "url": "https://www.cbsnews.com/news/neolithic-tomb-skeletons-discovered-5000-years-old-orkney-islands-scotland/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/10/25/b017e2a8-268b-4b76-8bf0-5c512f158611/thumbnail/1200x630/292415b21962a9193aa8fec6b867a49f/national-museums-scotland-005.jpg?v=287f03e8b6c956e3847aad6c604a17dd",
        "publishedAt": "2023-10-25T23:35:33Z",
        "content": "Archaeologists unearthed the ruins of a 5,000-year-old tomb on one of the Scottish Orkney Islands, National Museums Scotland said in a statement Tuesday.\r\nThe \"incredibly rare\" tomb, which is from th… [+1993 chars]"
    }]
    
    constructor() {
        super();
        this.state={
            articles:this.articles}
    }

    async componentDidMount() {
        let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=b2c2840d8ec24c9192df7cec0ad8f5b6";
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles});
    }
    render() {
        return (
            <div>
                <div className='container my-3'>
                    <h2>Headlines</h2>
                    <div className='row'>
                        {this.state.articles.map((element)=>{
                            return <div className='col-md-4' key={element.url}>
                            <NewsItems title={element.title?element.title.slice(0,50):element.title} description={element.description?element.description.slice(0,50):"Click to know"} imgURL={element.urlToImage?element.urlToImage:"https://miro.medium.com/v2/resize:fit:1400/0*elAd2K7VkeYUD8cZ"} newsURL={element.url} />
                        </div>
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default News
// copied from chatGPT, allows conversion of the UNIX timestamp from the created property returned by the reddit API into a readable format
const formatTimestamp = timestamp => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const day = date.getDate().toString().padStart(2, '0'); // Get day and pad with leading zero if needed
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month (Note: January is 0)
    const year = date.getFullYear().toString().slice(-2); // Get year and take last two digits
  
    return `${day}/${month}/${year}`;
};

const extractCardData = (rawFrontPageData) => {
    /*
        Data required by the Card:
            - Subreddit (including icon url... not too sure where to get this from raw data. Implement as an additional feature later)
            - Date posted (use formatTimestamp)
            - Username
            - Score
            - Title
            - Picture OR text (need conditional statement to determine which)
            - Top comment ** ADD THIS FEATURE LATER **

        Format of the new object returned by this function:
        [
            {
                subreddit: 'r/subreddit',
                datePosted: '12/12/2023',
                username: 'myusername',
                score: 1000,
                title: 'This is the title of the post'
                hasPicture: true,
                pictureUrl: 'www.theurlgoeshere.com',
                selftext: 'this is the text that goes in text based posts'
            },
            {...},
            {...}
        ]
        Each object represents one card. The array can be mapped and each property passed in as a prop to the ContentCard object. Conditional rendering will need to be added to the ContentCard component based on the hasPicture property to determine whether an <img /> or <div> tag is rendered.
    */

    const rawPostsArray = rawFrontPageData.data.children;
    const cardObjectArray = rawPostsArray.map(obj => {
        const hasMedia = Object.keys(obj.data).includes("media_metadata");
        let mediaUrl = '';
        if (hasMedia) {
            const mediaUrlList = Object.values(obj.data.media_metadata)[0].s;
            mediaUrl = Object.values(mediaUrlList)[1];
        } 
        return {
            subreddit: obj.data.subreddit_name_prefixed,
            datePosted: formatTimestamp(obj.data.created),
            username: obj.data.author,
            score: obj.data.score,
            title: obj.data.title,
            hasMedia: hasMedia, // check if the post has a media_metadata key
            mediaUrl: mediaUrl, // if the post has a media_metadata key, put the url of the media here
            url: obj.data.url, 
            selftext: obj.data.selftext
        };
    });

    return cardObjectArray;
};

export { extractCardData };
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=eNUY6b75XDZqnNFlDQ6kzGO89VVhWwIu`;

    const { data } = await fetch( url ).then( resp => resp.json() );

    const gifs = data.map( datum => {
        return {
            id: datum.id,
            title: datum.title,
            url: datum.images?.downsized_medium.url,
        }
    });

    return gifs;
}
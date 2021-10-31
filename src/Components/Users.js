import '../App.css'

function Users() {


    let Whishlist = [{
        Place:"Boudhanath Stupa",
        Location:" Kathmandu, ‎Nepal",
        Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Boudhanath_Stupa-IMG_7048.jpg/220px-Boudhanath_Stupa-IMG_7048.jpg",
        Rating:"",
        Purpose:"For A Meditative Experience",
        Link:"https://en.wikipedia.org/wiki/Boudhanath"
    },
    {
        Place:"Phewa Tal(Fewa Lake)",
        Location:" Pokhara, Nepal",
        Image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/62/71/2c/the-heart-soul-of-pokhara.jpg?w=500&h=-1&s=1",
        Purpose:"Scenic Surroundings",
        Link:"https://en.wikipedia.org/wiki/Phewa_Lake"
    },
    {
        Place:"Sarangkot",
        Location:"Pokhara, NepalCentral Region,Nepal",
        Image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d6/96/35/photo3jpg.jpg?w=500&h=400&s=1",
        Rating:"",
        Purpose:"View Sunrise",
        Link:"https://en.wikipedia.org/wiki/Sarangkot"
    },
    {
        Place:"Swayambhunath Temple",
        Location:"Kathmandu,Nepal",
        Image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/81/d8/6b/tempio-di-swayambhunath.jpg?w=500&h=400&s=1",
        Rating:"",
        Purpose:"Sacred among Buddhist pilgrimage",
        Link:"https://en.wikipedia.org/wiki/Swayambhunath"
    },
    {
        Place:"Poon Hill",
        Location:"Annapurna region ,Nepal",
        Image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/4b/02/ae/poon-hill.jpg?w=500&h=400&s=1",
        Rating:"",
        Purpose:"All mountains can be seen from here",
        Link:"https://en.wikipedia.org/wiki/Poon_Hill"
    },
    {
        Place:"World Peace Pagoda",
        Location:" Lumbini ,Nepal",
        Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Peace_Pagoda_of_Lumbini.JPG/220px-Peace_Pagoda_of_Lumbini.JPG",
        Rating:"",
        Purpose:" The Land Of Buddha",
        Link:"https://en.wikipedia.org/wiki/World_Peace_Pagoda,_Lumbini"
    },
    {
        Place:"Shri Pashupatinath Temple",
        Location:"Kathmandu Valley,Nepal",
        Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pashupatinath_Temple-2020.jpg/220px-Pashupatinath_Temple-2020.jpg",
        Rating:"",
        Purpose:"For A Meditative Experience",
        Link:"https://en.wikipedia.org/wiki/Shri_Pashupatinath_Temple"
    },
    {
        Place:"Kathmandu Durbur (Central) Square",
        Location:"Kathanadu Valley ,Nepal",
        Image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/4f/61/a0/piazza-centrale-di-durbar.jpg?w=500&h=-1&s=1",
        Rating:"",
        Purpose:"Royal palace of the former Kathmandu Kingdom",
        Link:"https://en.wikipedia.org/wiki/Kathmandu_Durbar_Square"
    },
    {
        Place:"Chandragiri Hills",
        Location:"Bhaleshwor ,Nepal",
        Image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/16/04/94/spectacular-views.jpg?w=500&h=400&s=1",
        Rating:"",
        Purpose:"Hill provides panoramic views of the Himalayan ranges from Annapurna to Everest",
        Link:"https://en.wikipedia.org/wiki/Chandragiri_Hill_(Nepal)"
    },
    {
        Place:"Mount Everest",
        Location:"Solukhumbu District, Nepal",
        Image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/a8/1a/f6/this-is-from-annapurna.jpg?w=500&h=-1&s=1",
        Rating:"",
        Purpose:"Climbing",
        Link:"https://en.wikipedia.org/wiki/Mount_Everest"
    }]
    

    return(

        <>

        <h1 className="title">My Whishlist for Nepal</h1>

        <div className="container">     

        {
            Whishlist.map((user,index)=>{
                return(
                    <>
                        <div className="cards" key={index} >
                            <img className="Image-card" src={user.Image} alt={user.Place} srcset="" />
                            <div className="text-container">



                    <h2 >{user.Place}</h2>
                    <h5><span className="fas fa-map-marker-alt icon-city"></span> {user.Location}</h5>
                    <p><b>Famous for :</b> {user.Purpose}</p>
                    <button className="btn"><a href={user.Link} target="_blank">Learn More</a> </button>
                            </div>
                        </div>
                    </>
                )
            })

        }
        </div>


        </>
    )
}
export default Users;
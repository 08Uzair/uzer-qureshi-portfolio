import React, { useEffect, useState } from 'react'

import SanityClient from '../client'
const Allposts = () => {
  const [postData, setPost] = useState(null)
  const [searchQuery, setSearchQuery] = useState('');
  // console.log(searchQuery);
  useEffect(() => {
    SanityClient.fetch(`
        *[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt,
            },
            publishedAt,
            github,
            youtube,
            netlify
        }
        `).then((data) => setPost(data))
      .catch(console.error)

  }, [])
  console.log(postData)

  const filteredPosts = postData ? postData.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];
  console.log(filteredPosts)
  return (
    <>
      <div id="browse" style={{ marginTop: "7rem" }} >
        <div className="flex items-center justify-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border-gray rounded-l-md focus:outline-none bg-customColor text-white hover:text-white searchBar"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>


      <div className="pro_cards_container">
        <div className="cards_container">
          <div className="pro_cards">
            {
              filteredPosts.length === 0 ? (
                <p>No results found !</p>
              ) : (
                filteredPosts && filteredPosts?.map((post, index) => (
                  <div key={post.slug?.current} className="pro_card m-3 bg-gray-800 rounded-lg shadow-md overflow-hidden w-72">
                    <div className="pro_image">
                      <a href={post.netlify} >
                        <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full" />
                      </a>
                    </div>
                    <div className="pro_card_footer p-4">
                      <h3 className="zero-line-ellipsis text-white text-base font-medium ">{post.title}</h3>
                      <i></i>
                      {/* <h4 className='date'>{post.publishedAt}</h4> */}
                      <div className="pro_footer_foot">
                        <div className="pro_author">
                          <h5>Uzer Qureshi</h5>
                        </div>
                        <div className="pro_socials flex">
                          <a href={post.youtube} target='__blank' ><i className='bx bxl-youtube text-red-600 text-xl'></i></a>
                          <a href='https://www.linkedin.com/in/uzairqureshi0803/' target='__blank' ><i className='bx bxl-linkedin text-blue-600 text-xl' ></i></a>
                          <a href={post.github} target='__blank' ><i className='bx bxl-github text-gray-600 text-xl' ></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )
            }


          </div>
        </div>
      </div>
    </>
  )
}

export default Allposts

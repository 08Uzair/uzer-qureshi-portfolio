import React, { useEffect, useState } from 'react'
import SanityClient from '../client'
const Card = () => {
    const [postData, setPost] = useState(null)
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
    // console.log(postData)
    return (
        <>
            {postData && postData.map((post, index) => (
                <div className="pro_card m-3 bg-gray-800 rounded-lg shadow-md overflow-hidden w-72">
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
            ))}
        </>
    )
}

export default Card

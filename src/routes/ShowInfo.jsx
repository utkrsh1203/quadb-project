import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "../components/Form";

function ShowInfo() {
  const [currshow, setCurrshow] = useState([]);
  // const [shows, setShows] = useState([]);
  let EndPoint = "https://api.tvmaze.com/shows";
  const { pathname } = useLocation();
  // console.log(pathname);
  // const {pathname} =
  const navigate = useNavigate();
  async function GetShowInfo() {
    const res = await fetch(EndPoint + pathname);
    // console.log(EndPoint + pathname);
    const data = await res.json();
    setCurrshow(() => [data]);
  }
  useEffect(() => {
    GetShowInfo();
    //   // console.log(pathname);
  }, [pathname]);

  return (
    <div className='py-5'>
      <button
        onClick={() => navigate("/")}
        className='px-5 py-1 font-medium mx-1 my-4 bg-teal-600 rounded text-gray-200'
      >
        BACK
      </button>
      {currshow &&
        currshow?.map((uinfo, i) => (
          <div
            key={i}
            className='flex justify-center md:flex-row
             md:px-0 px-4 flex-col gap-10'
          >
            <img
              src={uinfo?.image?.original}
              className='w-[350px] border-4 border-teal-400 md:mx-0 mx-auto'
            />
            <div className='text-lg leading-10 px-3'>
              {/* {console.log(currshow[0])} */}
              <h1 className='text-3xl pb-4'>{uinfo?.name}</h1>
              <p>
                <span className='text-teal-400'>Language</span> :
                {uinfo?.language}
              </p>
              <p>
                <span className='text-teal-400'>Status : </span>
                {uinfo?.status}
              </p>
              <p>
                <span className='text-teal-400'>Summary : </span>
                {uinfo?.summary}
              </p>
              {/* <p>
                <span className='text-teal-400'>public_repositories : </span>
                {uinfo.public_repos}
              </p> */}
              {/* <h1>
              <span className='text-teal-400'>Join : </span>
              {new Date(show.created_at).toLocaleDateString()}
            </h1> */}
              {/* <a
              href={show.html_url}
              target='_blank'
              className='text-gray-200 
                  font-semibold rounded cursor-pointer  px-4 py-1 bg-teal-600 my-3 tracking-wide'
            >
              Visit
            </a> */}
            </div>
          </div>
        ))}

      <Form />
    </div>
  );
}

export default ShowInfo;

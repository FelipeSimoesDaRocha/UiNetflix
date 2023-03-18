import React from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}


const Home = () => {
  return (
    <>
      <div className="pb-40">
        <h1>opa</h1>
      </div>
    </>
  )
}

export default Home;
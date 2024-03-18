import React, { useState } from 'react'
import { ApplicationProvider, Layout,Text,SafeAreaProvider } from '@ui-kitten/components';

function Home() {
   

  return (
    <Layout  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Page</Text>
    </Layout>
  )
}

export default Home


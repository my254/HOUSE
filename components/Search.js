import { Center, Grid, Menu, Paper, Text, TextInput, Title } from '@mantine/core'
import { IconSearch } from '@tabler/icons'
import React, { useEffect, useState } from 'react'
import FeaturesCard from './Product'

const ProductS = ({products}) => {
  const [search,setS] = useState("")
  const [assets,setNotifs] = useState([])
  const SEARCHA = value => {
    //const query = new RegExp(value.currentTarget.value,'g')
    setS(value.currentTarget.value)
   if(search.length > 3){
     setNotifs(() => {
     return  products.filter( pro =>  pro.name.includes(search.toLocaleLowerCase().trim()) || pro.description.includes(search.toLocaleLowerCase().trim() ) )
     })
   }else{
    setNotifs([])
   }
   }
  const GGrid = () => (
    <Menu >
    {
     assets.length !== 0 &&
      assets.map( item => (
        <FeaturesCard  key={item.id} data={item} search={true}/>  
      ) )
     }
    </Menu>
  )
  return (
   <Paper p={10}>
     <TextInput mb={10}  size="md" radius='md' value={search} onChange={SEARCHA} placeholder="What are you seraching for ?" icon={<IconSearch  />} />
   {assets.length !== 0 &&  <Text color="gray" mb={10} size="sm" >Found {assets.length} items</Text>}
    <GGrid />
   </Paper>
  )
}

export default ProductS
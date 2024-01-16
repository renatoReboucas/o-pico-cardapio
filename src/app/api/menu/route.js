import "dotenv/config"
import { NextResponse } from "next/server";
import {Client} from '@notionhq/client'
// https://www.notion.so/renatoreboucas/824be7a1be4d45eda301240a9defdb3f?v=dcd902f5af384372bb3ce8939d793560&pvs=4
const DATABASE_ID = '824be7a1be4d45eda301240a9defdb3f'
const NOTION_API_KEY = process.env.API_KEY
const notion = new Client({ auth: NOTION_API_KEY })

export async function GET() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,

  })
  // return response
  // console.log(response.results[0].properties);
  const arrMenu = []
  const specialBurguerFilter = response.results.filter( item => item?.properties?.section?.multi_select[0]?.name === 'Especial burguers')
  const specialBurguer = specialBurguerFilter.map(item =>{
    return {
      description: item?.properties?.description?.rich_text[0]?.plain_text,
        photo:  item?.properties?.photo?.rich_text[0] ? item?.properties?.photo?.rich_text[0]?.plain_text : '',
        price: item?.properties?.price?.number,
        name: item?.properties?.name?.title[0]?.plain_text,
    }
  })
  arrMenu.push({
    section: 'Especial burguers',
    menu: specialBurguer
  })
  const classicoBurguersFilter = response.results.filter( item => item?.properties?.section?.multi_select[0]?.name === 'Clássico burguers')
  const classicoBurguers = classicoBurguersFilter.map(item =>{
    return {
      description: item?.properties?.description?.rich_text[0]?.plain_text,
        photo:  item?.properties?.photo?.rich_text[0] ? item?.properties?.photo?.rich_text[0]?.plain_text : '',
        price: item?.properties?.price?.number,
        name: item?.properties?.name?.title[0]?.plain_text,
    }
  })
  arrMenu.push({
    section: 'Clássico burguers',
    menu: classicoBurguers
  })
  const baguetesFilter = response.results.filter( item => item?.properties?.section?.multi_select[0]?.name === 'Baguetes de parmesão')
  const baguetesBurguers = baguetesFilter.map(item =>{
    return {
      description: item?.properties?.description?.rich_text[0]?.plain_text,
        photo:  item?.properties?.photo?.rich_text[0] ? item?.properties?.photo?.rich_text[0]?.plain_text : '',
        price: item?.properties?.price?.number,
        name: item?.properties?.name?.title[0]?.plain_text,
    }
  })
  arrMenu.push({
    section: 'Baguetes de parmesão',
    menu: baguetesBurguers
  })
  const porcoesFilter = response.results.filter( item => item?.properties?.section?.multi_select[0]?.name === 'porções')
  const porcoesBurguers = porcoesFilter.map(item =>{
    return {
      description: item?.properties?.description?.rich_text[0] ? item?.properties?.description?.rich_text[0]?.plain_text : '',
        photo:  item?.properties?.photo?.rich_text[0] ? item?.properties?.photo?.rich_text[0]?.plain_text : '',
        price: item?.properties?.price?.number,
        name: item?.properties?.name?.title[0]?.plain_text,
    }
  })
  arrMenu.push({
    section: 'porções',
    menu: porcoesBurguers
  })
  const refrigerantesFilter = response.results.filter( item => item?.properties?.section?.multi_select[0]?.name === 'refrigerantes')
  const refrigerantesBurguers = refrigerantesFilter.map(item =>{
    return {
      description: item?.properties?.description?.rich_text[0] ? item?.properties?.description?.rich_text[0]?.plain_text : '',
        photo:  item?.properties?.photo?.rich_text[0] ? item?.properties?.photo?.rich_text[0]?.plain_text : '',
        price: item?.properties?.price?.number,
        name: item?.properties?.name?.title[0]?.plain_text,
    }
  })
  arrMenu.push({
    section: 'refrigerantes',
    menu: refrigerantesBurguers
  })
  const adicionaisFilter = response.results.filter( item => item?.properties?.section?.multi_select[0]?.name === 'Adicionais')
  const adicionaisBurguers = adicionaisFilter.map(item =>{
    return {
      description: item?.properties?.description?.rich_text[0] ? item?.properties?.description?.rich_text[0]?.plain_text : '',
        photo:  item?.properties?.photo?.rich_text[0] ? item?.properties?.photo?.rich_text[0]?.plain_text : '',
        price: item?.properties?.price?.number,
        name: item?.properties?.name?.title[0]?.plain_text,
    }
  })
  arrMenu.push({
    section: 'adicionais',
    menu: adicionaisBurguers
  })
  return NextResponse.json(arrMenu);
  const formatResponse = response.results.map( item  =>  {
    const data = {
      section: item?.properties?.section?.multi_select[0]?.name,
      menu: {
        description: item?.properties?.description?.rich_text[0]?.plain_text,
        photo:  item?.properties?.photo?.rich_text[0] ? item?.properties?.photo?.rich_text[0]?.plain_text : '',
        price: item?.properties?.price?.number,
        name: item?.properties?.name?.title[0]?.plain_text,
      }
    }
    return data
  })
  return NextResponse.json(formatResponse);
}

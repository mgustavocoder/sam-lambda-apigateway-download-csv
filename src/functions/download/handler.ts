import { json2csvAsync } from 'json-2-csv'

export const handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/text',
      'Content-Disposition': 'inline; filename=test.csv'
    },
    isBase64Encoded: true,
    body: await json2csvAsync([{
      header1: '1',
      header2: '1'
    },
    {
      header1: '3',
      header2: '4'
    }])
  }
}
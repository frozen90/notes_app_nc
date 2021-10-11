import React, {useEffect, useState} from "react";
import { Container, Grid, Loader } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import { getSharedNoteExpiryDate } from "../../../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';

export const ShareNote = (props,{}) => {
    const link = props.match.params.link
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetchExpiryDate()
    },[])
    async function fetchExpiryDate(){
        try{
            const expiryDate = await API.graphql(graphqlOperation(getSharedNoteExpiryDate, { input: { link:link } }))
            console.log(expiryDate)
        }catch(err){
            console.log(err)
        }   
    }

    return(
        <Container fluid>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Shared Note</title>
                <link rel="canonical" href="/login" />
            </Helmet>
            {!loading ?
                <Grid centered style={{ padding: '20px', height: "100vh" }} verticalAlign="middle">
                        XD
                </Grid>
                :
                <Loader className='loader' active size='large'>Loading...</Loader>

            }
        </Container>
    )
}

export default ShareNote
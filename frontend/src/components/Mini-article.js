import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        textAlign: "left"
    },
    page: {
        display: "inline-block",
        width: "100%",
        maxWidth:"1080px"
    },
    bannerImage: {

    },
    title:{
        textTransform: "uppercase",
        fontWeight: "200",
        objectFit: "contain",
        textAlign: "left"
    },
    teaser: {
        textAlign: "left",
        fontStyle: "italic"
    },
    author: {
        textAlign: "left"
    },
    containerBox:{
        textAlign: "left"
    }
});

const MiniArticleComponent = (props) => {
    const classes = useStyles()
    props = props.props
    return (
        <div className = {classes.root}>
            <div className = {classes.page}>
                <img className= 'bannerImage' alt ="banner for mini article component" src = {props.banner} style = {{ maxWidth: "300px"}}/>
                <Typography variant="h6" className = {classes.title}>
                    {props.title}
                </Typography>
                <Typography variant="h7" className = {classes.author} style = {{ fontWeight: "200"}}>
                    {props.author}
                </Typography>
                <Typography variant="subtitle1" className = {classes.teaser}>
                    {props.teaser}
                </Typography>
            </div>
        </div>
    )
}

class MiniArticle extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <MiniArticleComponent props = {this.props} />
        )
    }
}

MiniArticle.defaultProps = {
    banner: "ASSETS/trumpCartoon.jpg",
    title: "Dummy Title goes here",
    teaser: "A teaser for the dummy article here",
    author: "Dummy Author 1"
}

export default MiniArticle


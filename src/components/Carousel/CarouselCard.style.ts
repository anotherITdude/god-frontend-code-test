import { ExtendCSS } from "vcc-ui";


export const cardContainer: ExtendCSS = {
    justifyContent: "center", 
    padding: '0px 0px',
    marginTop:'0px'
}

export const cardHeading:ExtendCSS ={
    color: "foreground.secondary",
    justifyContent:'space-evenly',
}

export const cardSubHeading: ExtendCSS = {
    paddingBottom:'5px',
    fromL: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
}

export const cardModelType: ExtendCSS = {
    backgroundColor:'red'
}

export const cardBodyType: ExtendCSS = {
    color:'foreground.secondary'
}

export const cardFooter: ExtendCSS = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
};


export const imageContainer: ExtendCSS = {
    border: 0,
    width: '100%',
};




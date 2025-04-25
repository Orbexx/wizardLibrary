import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const WidgetCard = (props) => {
    return (
        <Card>
            <CardImg width="100%" src={props.widget.image} alt={props.widget.title} />
            <CardImgOverlay>
                <CardTitle>{props.campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};


export default WidgetCard;
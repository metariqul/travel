import React, { useState } from 'react';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElement/Card';
import Modal from '../../shared/components/UIElement/Modal';
import Map from '../../shared/components/UIElement/Map';


import './PlaceItem.css';

const PlaceItem = props => {

    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    return (
        <React.Fragment>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-footer"
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className="map-container">
                    <Map center={props.coordinates} zoom={15} />
                </div>
            </Modal>
            <li className="place-item" key={props.key} id={props.id}>
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button onClick={openMapHandler}>VIEW ON MAP</Button>
                        <Button>EDIT</Button>
                        <Button>DELETE</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default PlaceItem;

import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardFooter,
    Image,
    NextUIProvider,
    CardBody,
} from '@nextui-org/react';
import styles from './my-next-ui-component.module.scss';

const MyNextUIComponent: React.FC = () => {
    return (
        <div>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        width={270}
                    />
                </CardBody>
            </Card>
        </div>
    );
};

export default MyNextUIComponent;

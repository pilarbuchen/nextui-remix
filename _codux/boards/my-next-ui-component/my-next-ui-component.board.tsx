import { createBoard } from '@wixc3/react-board';
import MyNextUIComponent from '../../../src/components/my-next-ui-component/my-next-ui-component';

export default createBoard({
    name: 'MyNextUIComponent',
    Board: () => <MyNextUIComponent />,
});

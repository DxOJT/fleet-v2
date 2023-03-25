// thrid party libraries
import { Button, Divider } from 'antd';

const List = ({ data, onViewClick, render }) => {
  return (
    <div>
      {data.map((record) => (
        <>
          <div className="flex w-full justify-between">
            <div>{render(record)}</div>
            <div className="flex items-center">
              <Button type="link" onClick={onViewClick(record.id)}>
                View
              </Button>
            </div>
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
};

export default List;

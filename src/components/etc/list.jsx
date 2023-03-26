// thrid party libraries
import { Button, Divider, Skeleton } from 'antd';

const List = ({ data, onViewClick, render, className, loading }) => {
  return (
    <div className={className}>
      {loading && <Skeleton active />}
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

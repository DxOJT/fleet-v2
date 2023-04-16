// thrid party libraries
import { Button, Divider, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import { toJS } from "mobx";
const List = ({ data, render, className, loading }) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      {loading && <Skeleton active />}
      {data.map((record) => (
        <>
          <div className="flex w-full justify-between">
            <div>{render(record)}</div>
            <div className="flex items-center">
              <Button
                type="link"
                onClick={() =>
                  navigate("/admin/driver-view-details", {
                    state: { ...toJS(record) },
                  })
                }
              >
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

// third party libraries
import { Button, Table } from 'antd';
import Typography from 'antd/es/typography/Typography.js';
import moment from 'moment';

// helpers
import { displayFulllName } from '../../../helper/name.cjs';

// components
import List from '../../etc/list.jsx';

const DriverTable = ({ data, onViewButton }) => {
  const columns = [
    {
      title: 'Name',
      key: 'name',
      render: (_, record) => (
        <Typography.Text>{displayFulllName(record.first_name, '', record.last_name)}</Typography.Text>
      ),
    },
    {
      title: '	LICENSE EXPIRY',
      dataIndex: 'licence_expiration',
      key: 'licence_expiration',
      render: (text) => (
        <Typography.Text>{moment(text).format(import.meta.env.VITE_DATE_DISPLAY_FORMAT)}</Typography.Text>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => {
            onViewButton(record.id);
          }}
        >
          View Details
        </Button>
      ),
    },
  ];
  const listRender = (record) => (
    <>
      <Typography.Paragraph strong>
        Name: {displayFulllName(record.first_name, '', record.last_name)}
      </Typography.Paragraph>
      <Typography.Text>
        Licence expiry: {moment(record.licence_expiration).format(import.meta.env.VITE_DATE_DISPLAY_FORMAT)}
      </Typography.Text>
    </>
  );
  return (
    <>
      <Table className="lg:block hidden" columns={columns} dataSource={data} />
      <List className="lg:hidden block" data={data} onViewClick={console.log} render={listRender} />
    </>
  );
};

export default DriverTable;

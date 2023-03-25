// third party libraries
import { Button, Card, Input, Typography } from 'antd';

// components
import DriverTable from '../../../components/admin/employee/driverTable';

const DriverList = () => {
  // data
  const driverData = [
    {
      id: 1,
      last_aname: 'Fuenteblanca',
      first_name: 'Sonny Boy',
      licence_expiration: '12/24/2023',
    },
    {
      id: 2,
      last_aname: 'Candido',
      first_name: 'Cedric Franz',
      licence_expiration: '12/24/2023',
    },
    {
      id: 3,
      last_aname: 'Camogues',
      first_name: 'Sean',
      licence_expiration: '12/24/2023',
    },
    {
      id: 4,
      last_aname: 'Cuyog',
      first_name: 'Reyjan',
      licence_expiration: '12/24/2023',
    },
    {
      id: 5,
      last_aname: 'Mabaho',
      first_name: 'Eunice Balmes',
      licence_expiration: '12/24/2023',
    },
    {
      id: 6,
      last_aname: 'ggggggggggg',
      first_name: 'ggggggggggg',
      licence_expiration: '12/24/2023',
    },
    {
      id: 7,
      last_aname: 'fffffffff',
      first_name: 'fffffffff',
      licence_expiration: '12/24/2023',
    },
    {
      id: 8,
      last_aname: 'jjjjjjjjjjj',
      first_name: 'jjjjjjjjjjj',
      licence_expiration: '12/24/2023',
    },
    {
      id: 9,
      last_aname: 'nnnnnnnnnnnn',
      first_name: 'nnnnnnnnnnnn',
      licence_expiration: '12/24/2023',
    },
    {
      id: 10,
      last_aname: 'Seganwqeqeqwe Abayo',
      first_name: 'Seganwqeqeqwe Abayo',
      licence_expiration: '12/24/2023',
    },

    {
      id: 11,
      last_aname: 'Abayo',
      first_name: 'Segan',
      licence_expiration: '12/24/2023',
    },
  ];

  return (
    <>
      <Card className="mb-5">
        <div className="block lg:flex justify-between w-full">
          <Typography.Title className="block lg:hidden" level={4} style={{ margin: 0 }}>
            Drivers
          </Typography.Title>
          <Typography.Title className="hidden lg:block" level={2} style={{ margin: 0 }}>
            Drivers
          </Typography.Title>
          <div className="block lg:flex items-center">
            <Input.Search className="lg:w-40 my-5 lg:mr-5 lg:my-0" search placeholder="Search"></Input.Search>
            <Button className="w-full lg:w-auto" type="primary" ghost>
              Add Driver
            </Button>
          </div>
        </div>
      </Card>
      <Card>
        <DriverTable data={driverData} onViewButton={console.log} />
      </Card>
    </>
  );
};

export default DriverList;

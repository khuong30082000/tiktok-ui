import Button from '~/components/Button';

function MenuItem({ data }) {
  return (
    <Button leftIcon={data.icon} to={data.link}>
      {data.title}
    </Button>
  );
}

export default MenuItem;

import { Box, Paper, Grid, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { SearchHotel } from './SearchHotel/SearchHotel';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: '1rem',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
    margin: '0 13.61%',
  },
  box: {
    maxWidth: 360,
  }
})

export const Main = () => {
  const classes = useStyles();


  return (
    <Box className={classes.wrapper}>
      <Grid 
        container 
        direction="row"
        spacing={3}
      >
        <Grid item xs={4} container spacing={3}>
          <Grid item xs={12}>
            <Item>
              <SearchHotel />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae debitis animi facere, architecto sunt alias sed natus cum! Praesentium ab, doloremque voluptates suscipit dolores ipsam expedita consequuntur distinctio odio dolore?
            Saepe adipisci tempora, odio at architecto totam recusandae provident temporibus ab natus assumenda nulla ut nisi ea amet vero! Eligendi voluptate provident molestiae, velit iste iure neque vitae commodi expedita.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Item>
          </Grid>
        </Grid>
        <Grid item xs={8} container>
          <Grid item xs={12}>
          <Item>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique odit iste, sapiente repellat fugit dolores vero veniam eligendi tempore earum aut nobis, itaque saepe quia error laboriosam. Provident, alias exercitationem.
          Tempore ratione deleniti, nemo cumque ipsam dolore porro asperiores atque assumenda saepe quam neque nesciunt culpa delectus excepturi nulla odit rerum, dolorum consectetur. Ex reiciendis dolor quibusdam ipsum dignissimos? Veniam.
          Rerum voluptatum tempore quo? Facere consequatur dolor sed provident voluptate expedita sint mollitia, esse, dolorum, exercitationem aspernatur minus nisi labore pariatur voluptas facilis perferendis dolorem eligendi similique. Ullam, nemo fugiat.
          Aliquid vero repudiandae possimus hic excepturi provident alias itaque voluptatibus, quibusdam, voluptatum id sunt molestias illo. Eligendi atque at, voluptatibus expedita commodi accusamus culpa cumque delectus animi nisi quae est!
          Deleniti eaque provident ducimus laborum quaerat debitis dolor, autem optio laboriosam animi molestiae in, tempore explicabo voluptatum suscipit ea! Cum est quod molestiae reprehenderit numquam at aperiam illum nobis nisi.
          Tempora, exercitationem tenetur? Modi autem repellendus nam. Labore nihil incidunt non laborum cumque? Doloremque sed quo, ea et, quaerat explicabo nemo odio distinctio qui ullam praesentium aut cumque libero nihil!
          Suscipit aspernatur aliquid harum veniam, corrupti nemo accusantium? Aut ab adipisci magni, dolore inventore mollitia eos est optio consequatur dolores hic vel esse. Fugit, exercitationem. Cumque temporibus odio a ex.
          Beatae nam ipsam, doloremque cupiditate enim at quam, animi dolorum, est hic minus facere consectetur. Facilis ipsa amet, quibusdam nesciunt rerum temporibus quasi saepe neque fuga aliquid perferendis, velit eos?
          Voluptatem labore quis molestias placeat odit? Dolorem laborum corrupti dignissimos magnam non similique quaerat maxime deserunt amet totam delectus est numquam autem laboriosam, tempore saepe? Corrupti reiciendis dolore accusantium illo.
          Quam harum commodi iusto cupiditate? Voluptates dicta eum impedit corporis dignissimos optio dolores quos soluta nulla amet, quaerat deserunt, expedita hic incidunt numquam non culpa voluptatem totam recusandae nisi quod.</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
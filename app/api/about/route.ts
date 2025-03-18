import { mock } from 'mockjs';
export const GET = () => {
  return new Response(
    JSON.stringify(
       mock({
        'list|1-10': [
          {
            'id|+1': 1,
            'name|1': '@cname',
            'age|1-100': 1,
            'sex|1': ['男', '女'],
            'address|1': '@county(true)',
            'email|1': '@email',
            'phone|1': '@phone',
          },
        ],
      }),
    ),
    {
      status: 200,
    }
  );
};

import { Meal } from './Meal';

function MealList({meals}) {
return <div className='list'>
    {meals.map(meal => (
        <Meal key={meal.idMEal} {...meal} />
    ))}
</div>
};

export { MealList }
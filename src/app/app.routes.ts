import { Routes } from '@angular/router';
import { OneWayDatabindingComponent } from './components/data-binding/one-way-databinding/one-way-databinding.component';
import { TwoWayDataBindingComponent } from './components/data-binding/two-way-data-binding/two-way-data-binding.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { StructuralDirectivesComponent } from './components/directives/structural-directives/structural-directives.component';
import { IfElseComponent } from './components/contrl-flow/if-else/if-else.component';
import { ForSwitchComponent } from './components/contrl-flow/for-switch/for-switch.component';
import { DefaultPipeComponent } from './components/pipes/default-pipe/default-pipe.component';
import { AsyncPipeComponent } from './components/pipes/async-pipe/async-pipe.component';
import { CustPipeExampleComponent } from './components/pipes/cust-pipe-example/cust-pipe-example.component';
import { TemplateComponent } from './components/forms/template-form/template/template.component';
import { TemplateExampleComponent } from './components/forms/template-example/template-example.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form/reactive-form.component';



export const routes: Routes = [
    {
        path: 'one-way',
        component: OneWayDatabindingComponent
    },
    {
        path: 'two-way',
        component: TwoWayDataBindingComponent
    },
    {
        path: 'attribute-dir',
        component: AttributeDirectiveComponent
    },
    {
        path: 'structural-dir',
        component: StructuralDirectivesComponent
    },
    {
        path: 'if-else',
        component: IfElseComponent
    },
    {
        path: 'for-switch',
        component: ForSwitchComponent
    },
    {
        path: 'default-pipe',
        component: DefaultPipeComponent
    },
    {
        path: 'async-pipe',
        component: AsyncPipeComponent
    },
    {
        path: 'custom-pipe',
        component: CustPipeExampleComponent
    },
    {
        path: 'template-form',
        component: TemplateComponent
    },
    {
        path: 'template-form-example',
        component: TemplateExampleComponent
    },
    {
        path: 'reactive-form',
        component: ReactiveFormComponent
    }
];
